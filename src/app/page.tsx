import Link from "next/link";

export default async function Home() {
  return (
    <main className="grid place-items-center h-screen bg-neutral-900 text-white">
      <Link href="/sign-in">Sign in</Link>
    </main>
  );
}
