"use client";

import React, { useEffect, useState } from "react";

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default function Bigger() {
  const [data, setData] = useState<IPost[] | null>(null);

  async function getUsersData() {
    const getData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res: IPost[] = await getData.json();

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
        return <div key={item.id}>{item.id}</div>;
      })}
    </div>
  );
}
