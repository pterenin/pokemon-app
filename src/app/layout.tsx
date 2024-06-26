import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from "@auth0/nextjs-auth0";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Header user={user} />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
