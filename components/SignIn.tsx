"use client";

import Link from "next/link";
import Avatar from "react-avatar";
import { useSession, signOut } from "next-auth/react";

const SignIn = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <span>Loading</span>;
  if (!!session) {
    console.log(session);
    return (
      <>
        <button
          onClick={() => signOut()}
          className="bg-secondary/20 rounded-md px-4 py-1 text-base shadow-sm"
        >
          Sign Out
        </button>
        <Link href="/board" aria-label="View Board">
          <Avatar
            name={session.user?.name || ""}
            color="#27452b"
            fgColor="#fff"
            src={session.user?.image || ""}
            round
            size="35"
            alt="View Board"
          />
        </Link>
      </>
    );
  }

  return (
    <Link
      href="/api/auth/signin"
      className="bg-secondary/20 rounded-md px-4 py-1 text-base shadow-sm"
    >
      Sign In
    </Link>
  );
};

export default SignIn;
