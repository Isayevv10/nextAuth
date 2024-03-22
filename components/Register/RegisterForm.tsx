"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import "@/style/registerForm.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    error: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.password) {
      setFormData({ ...formData, error: "something went wrong!" });
      return;
    }

    try {
      const userExist = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const { user } = await userExist.json();

      if (user) {
        setFormData({ ...formData, error: "User already exist!" });
        return;
      }

      const res = await fetch("api/registers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (res.ok) {
        setFormData({
          email: "",
          name: "",
          password: "",
          error: "",
        });

        router.push("/login");
      }
    } catch (error) {
      console.log("Error happened:", error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <header>Register Page</header>
        <form action="" onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="text"
              name=""
              placeholder="Full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="field input-field">
            <input
              type="email"
              name=""
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              name=""
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {formData.error && <div>{formData.error}</div>}

          <div className="field input-field">
            <button type="submit">Register</button>
          </div>

          <div className="form-link">
            <span>Do youi have an account ? </span>
            <Link href="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
