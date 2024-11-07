"use server";

import { getUser, newUser } from "@/db/users";
import { createSession, deleteSession } from "@/server/auth/session";
import { redirect } from "next/navigation";
import { signinSchema, signupSchema } from "./types";

export async function signin(formData: FormData): Promise<{
  success: boolean;
  errors?: { email?: string[] };
}> {
  const { data, success, error } = signinSchema.safeParse(formData);
  if (!success) return { success: false, errors: error.flatten().fieldErrors };
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
    await createSession(user.id.toString());
    redirect("/dashboard");
  }
}
export async function signout() {
  await deleteSession();
  redirect("/");
}

export default async function signup(formData: FormData) {
  const { data, success, error } = signupSchema.safeParse(formData);
  if (!success) {
    return { success: false, errors: error.flatten().fieldErrors };
  }
  if (data.password !== data.confirmPassword) {
    return {
      success: false,
      errors: {
        password: ["passwords do not match"],
      },
    };
  }
  const isUser = Boolean(await getUser(data));
  if (isUser) {
    return {
      success: false,
      errors: {
        email: ["Email is associated with an account."],
      },
    };
  }
  const [userId] = await newUser(data);
  await createSession(userId.insertedId.toString());
  redirect("/dashboard");
}
