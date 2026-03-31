import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AuthRequest, AuthResponse } from '@/app/Types';
import { Database } from '@/config/db';
import { verifyPassword } from '@/lib/auth';
import { generateAccessToken, generateRefreshToken } from '@/lib/jwt';

export async function POST(request: Request) {
  try {
    const body: AuthRequest = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json<AuthResponse>({ message: 'Email and password required', errorNumber: 2 }, { status: 400 });
    }

    const db = Database.getInstance().getClient();
    await db.connect();
    
    const collection = db.db('skybit').collection('users');
    const user = await collection.findOne({ email });

    if (!user) {
      return NextResponse.json<AuthResponse>({ message: 'Invalid credentials', errorNumber: -1 }, { status: 404 });
    }

    const isValidPassword = await verifyPassword(password, user.passwordHash);
    
    if (!isValidPassword) {
      return NextResponse.json<AuthResponse>({ message: 'Invalid credentials', errorNumber: 1 }, { status: 401 });
    }

    // 1. Generate Tokens
    const accessToken = await generateAccessToken({ userId: user._id.toString(), email: user.email, role: user.role });
    const refreshToken = await generateRefreshToken({ userId: user._id.toString() });

    // 2. Save Refresh Token in DB
    await collection.updateOne({ _id: user._id }, { $set: { refreshToken } });

    // 3. Set Refresh Token in HTTP-Only Cookie
    const cookieStore = await cookies();
    cookieStore.set('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/', // Global cookie path so middleware reads it
    });

    // 4. Return Access Token Payload
    return NextResponse.json<AuthResponse>({
      message: 'Authentication successful',
      errorNumber: 0,
      token: accessToken
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json<AuthResponse>({ message: 'Internal server error', errorNumber: 500 }, { status: 500 });
  }
}
