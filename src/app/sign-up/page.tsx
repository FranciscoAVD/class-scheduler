import signup from "@/lib/actions";
import Link from "next/link";
import React from "react";

export default function SignUpPage() {
  return (
    <main className="grid place-items-center h-screen bg-neutral-900 text-neutral-100">
      <form
        action={async (formData) => {
          "use server";
          const email = formData.get("email");
          const password = formData.get("password");
          const confirmPassword = formData.get("confirm-password");
          //@ts-ignore
          const response = await signup({ email, password, confirmPassword });
          console.log(response);
        }}
        className="flex flex-col gap-y-2 border border-neutral-500 p-4 rounded-lg w-full max-w-md"
      >
        <span className="text-2xl font-semibold">Sign up</span>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded bg-neutral-200 h-9 text-neutral-950 px-2"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="text"
            className="rounded bg-neutral-200 h-9 text-neutral-950 px-2"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="confirm-password">confirm password</label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="text"
            className="rounded bg-neutral-200 h-9 text-neutral-950 px-2"
          />
        </div>
        <button className="h-10 rounded px-3 py-1 border border-neutral-500 w-full mt-4 hover:bg-neutral-800">
          Sign up
        </button>
        <p className="mt-4 text-neutral-500">Already have an account? <Link href="sign-in" className="text-neutral-100">Sign in</Link></p>
      </form>
    </main>
  );
}
