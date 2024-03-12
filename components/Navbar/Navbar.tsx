"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState<React.ChangeEvent<HTMLSelectElement>>();

  const t = useTranslations("Navbar");

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Link href="/">{t("home")}</Link>
      </div>
      <div style={{ marginRight: "6px", marginLeft: "6px" }}>
        <Link href="/blog">{t("blog")}</Link>
      </div>
      <div>
        <Link href="/about">{t("about")}</Link>
      </div>

      <div style={{ marginLeft: "5px" }}>
        <Link href={"/en"} locale="en">
          En
        </Link>{" "}
        <Link href={"/az"} locale="az">
          Az
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
