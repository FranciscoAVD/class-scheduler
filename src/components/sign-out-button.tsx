import { Button } from "./ui/button";
import { signout } from "@/lib/actions";

export default function SignOutButton() {
  return (
    <form action={signout} className="w-fit">
      <Button type="submit">Sign out</Button>
    </form>
  );
}
