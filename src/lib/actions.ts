"use server";

import { getUser } from "@/db/users";
import { createSession, deleteSession } from "@/server/auth/session";
import { redirect } from "next/navigation";
import { loginSchema } from "./types";

export async function login(formData: FormData):Promise<{
    success: boolean;
    errors?: {email?: string[], password?: string[]}
  }>{
    const { data, success, error } = loginSchema.safeParse(formData);
    if (!success) return {success:false, errors: error.flatten().fieldErrors };
    const user = await getUser(data);
    //if user is undefined, there is no email associated. Otherwise, verify passwords match.
    if (!user)
      return {
        success: false,
        errors: { email: ["Incorrect email or password"] },
      };
    if (user.password !== data.password) {
      return {
        success: false,
        errors: { email: ["Incorrect email or password"] },
      };
    } else {
      await createSession(user.id.toString())
      redirect("/dashboard")
    }
  }
export async function logout() {
  await deleteSession();
  redirect("/login")
}