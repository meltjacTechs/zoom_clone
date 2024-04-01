import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: {
  template:
  "Zoom Clone | Meltjac Techs | A cloud-based video conferencing platform",
  default:
    "Zoom Clone | A cloud-based video conferencing platform | Meltjac Techs",
},
description:
  "Zoom Clone | A cloud-based video conferencing platform that allows for virtual meetings with screen sharing and chat functionalities.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
