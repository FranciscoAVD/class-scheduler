import Link from "next/link";
import { routes } from "@/lib/constants";
export default async function Home() {
  return (
    <main className="grid place-items-center h-screen bg-neutral-900 text-white">
      <Link href={routes.getSignIn()}>Sign in</Link>
    </main>
  );
}
