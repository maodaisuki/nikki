import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "猫猫日记",
  description: "只是在说话",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={`${inter.className} bg-primary-background w-full`}>
        <div className="bg-background mx-auto w-full max-w-[800px] p-[20px]">
          <Suspense>
            { children }
          </Suspense>
        </div>
      </body>
    </html>
  );
}
