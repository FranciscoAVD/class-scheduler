import SignOutButton from "@/components/sign-out-button";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <header className="flex items-center h-header border-b">
        <div className="container mx-auto">
        <SignOutButton />
        </div>
      </header>
      <main className="min-h-main">
        
      </main>
    </>
  );
}
