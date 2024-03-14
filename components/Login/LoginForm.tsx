"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        password: inputData.password,
        email: inputData.email,
        redirect: false,
      });

      if (res?.error) {
        setInputData({ ...inputData, error: "Invalid Details" });
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Login Page</p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="EMAIL"
            value={inputData.email}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            name=""
            placeholder="PASSWORD"
            value={inputData.password}
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
          />
        </div>

        {inputData.error && <div>{inputData.error}</div>}

        <button type="submit">SUBMIT</button>
        <div style={{ display: "flex" }}>
          <span>Don't have an account ?</span>
          <Link href="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
