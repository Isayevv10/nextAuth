"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const { data: session, status } = useSession();
  console.log(status);

  return (
    <div>
      <p> HERE IS DASHBOARD PAGE</p>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Log out
      </button>
    </div>
  );
};

export default page;
