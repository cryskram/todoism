import AuthProvider from "@/lib/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todoism",
  description: "An end-to-end encrypted Todo Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} text-slate-900 bg-slate-100 m-3`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
