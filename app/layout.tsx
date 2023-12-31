import "./globals.css";
import type { Metadata } from "next";
import LayoutProvider from "@/component/layoutProvider/layoutProvider";
import {inter } from './fonts';
export const metadata: Metadata = {
  title: "Fitness App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
