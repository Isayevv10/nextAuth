import RegisterForm from "@/components/Register/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions as never);
  if (session) redirect("/dashboard");

  return <RegisterForm />;
};

export default page;
