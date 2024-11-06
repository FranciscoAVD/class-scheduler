import { SignJWT, jwtVerify } from "jose";
import { env } from "@/env";
import { loginSchema } from "@/lib/types";
import { getUser } from "@/db/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const encodedKey = new TextEncoder().encode(env.SESSION_SECRET);

type SessionPayload = {
  userId: string;
  expiresAt: Date;
};


export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}
export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    console.log("Failed to decrypt");
  }
}
export async function createSession(userId: string,){
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); //1 week
    const session = await encrypt({userId, expiresAt});

    cookies().set(env.SESSION_NAME, session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
    })
}
export async function getSession() {

}
export async function deleteSession() {}
