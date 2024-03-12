import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const page = () => {
  const t = useTranslations("About");

  return (
    <div>
      <Link href={`/about/${1}`}>{t("product")}</Link>
    </div>
  );
};

export default page;
