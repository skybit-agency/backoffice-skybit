import { cookies } from "next/headers";
import { verifyRefreshToken } from "./jwt";
import { Database } from "@/config/db";
import { ObjectId } from "mongodb";

export async function getSessionUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refresh_token")?.value;

    if (!token) return null;

    const payload = await verifyRefreshToken(token);
    if (!payload || !payload.userId) return null;

    const db = Database.getInstance().getClient();
    await db.connect();
    const collection = db.db('skybit').collection('users');
    
    // Check if the userId is a 24-char hex string to cleanly cast to ObjectId
    const query = typeof payload.userId === 'string' && payload.userId.length === 24 
      ? { _id: new ObjectId(payload.userId) } 
      : { _id: payload.userId };

    const user = await collection.findOne(query);

    if (!user) return null;

    return {
      name: user.name || "Administrator",
      email: user.email,
      avatar: user.avatar || "",
      role: user.role,
    };
  } catch (err) {
    console.error("Session fetch error:", err);
    return null;
  }
}
