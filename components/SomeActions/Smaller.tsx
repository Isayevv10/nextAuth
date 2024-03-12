"use client";

import React, { useEffect, useState } from "react";

interface IUser {
  id: number;
  username: number;
  email: string;
  website: string;
}

export default function Smaller() {
  const [data, setData] = useState<IUser[] | null>(null);

  async function getUsersData() {
    const getData = await fetch("https://jsonplaceholder.typicode.com/users");
    const res: IUser[] = await getData.json();

    setData(res);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((item, index) => {
        return <div key={item.id}>{item.email}</div>;
      })}
    </div>
  );
}
