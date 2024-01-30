import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Naga Ventures",
  description: "Powered by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
