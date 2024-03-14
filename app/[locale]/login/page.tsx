import LoginForm from "@/components/Login/LoginForm";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions as never);
  if (session) redirect("/dashboard");

  return (
    <>
      <LoginForm />
    </>
  );
};

export default page;
