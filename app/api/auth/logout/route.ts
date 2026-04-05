import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { AuthResponse } from '@/app/Types';

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // Attempt to clear the cookie by setting maxAge to 0
    cookieStore.set('refresh_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    return NextResponse.json<AuthResponse>({
      message: 'Logged out successfully',
      errorNumber: 0,
    }, { status: 200 });

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json<AuthResponse>({ message: 'Internal server error', errorNumber: 500 }, { status: 500 });
  }
}
