"use client";

import React, { useEffect, useState } from "react";
import Smaller from "./Smaller";
import Bigger from "./Bigger";

const Actions = () => {
  const [width, setWidth] = useState<number>(0);

  const handleResize = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    handleResize();
  }, []);

  return <div>{width < 479 ? <Smaller /> : <Bigger />}</div>;
};

export default Actions;
