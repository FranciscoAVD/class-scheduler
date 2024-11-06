import { login } from '@/lib/actions';

export default function LoginPage() {
  return (
    <main className="grid place-items-center h-screen bg-neutral-900 text-white">
      <form action={async (formData) => {
        "use server";
        const email = formData.get("email");
        const password = formData.get("password");
        //@ts-ignore
        await login({email,password});
        }} className="flex flex-col gap-y-2 border border-neutral-500 p-4 rounded-lg w-full max-w-md">
        <span className="text-2xl font-semibold">Login</span>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">email</label>
          <input id="email" name="email" type="email" className="rounded bg-neutral-200 h-9 text-neutral-950 px-2" />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password">password</label>
          <input id="password" name="password" type="text" className="rounded bg-neutral-200 h-9 text-neutral-950 px-2" />
        </div>
        <button className="h-10 rounded px-3 py-1 border border-neutral-500 w-full mt-4 hover:bg-neutral-800">Login</button>
      </form>
    </main>
  )
}
