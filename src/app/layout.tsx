import type { Metadata } from "next";
import type { ReactNode } from "react";

import { abar } from "../assets/fonts";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "اقامتگاه بومگردی گیلمار",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={abar.variable}>
      <body>{children}</body>
    </html>
  );
}
