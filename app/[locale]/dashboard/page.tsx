"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session, status } = useSession();
  console.log(status);

  const handFunc = () => {
    signOut();
  };
  return (
    <div>
      <p> HERE IS DASHBOARD PAGE</p>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <button onClick={handFunc}>Log out</button>
    </div>
  );
};

export default page;
