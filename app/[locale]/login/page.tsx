import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>Login Page</p>
      <form action="">
        <div>
          <input type="email" name="" id="" required placeholder="EMAIL" />
        </div>
        <div>
          <input type="password" name="" required placeholder="PASSWORD" />
        </div>
        <button type="submit">SUBMIT</button>
        <div style={{ display: "flex" }}>
          <span>Don't have an account ?</span>
          <Link href="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default page;
