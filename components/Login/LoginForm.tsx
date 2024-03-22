"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/style/loginForm.scss";

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
    <div className="container">
      <div className="form">
        <header>Login Page</header>
        <form action="" onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              name=""
              placeholder="Password"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </div>

          {inputData.error && <div>{inputData.error}</div>}

          <div className="field input-field">
            <button type="submit">Login</button>
          </div>

          <div className="form-link">
            <span>Don't have an account ?</span>
            <Link href="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
