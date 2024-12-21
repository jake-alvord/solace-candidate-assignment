import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Solace Candidate Assignment",
  description: "2 hours goes fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
