"use client";

import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  const t = useTranslations("Blog");

  return <div>{t("content")}</div>;
};

export default page;
