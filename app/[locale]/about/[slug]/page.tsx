import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  const t = useTranslations("About");
  return <div>{t("slug")}</div>;
};

export default page;
