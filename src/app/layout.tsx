import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure Payment Gateway",
  description: "Mid-level frontend engineering assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <main className="min-h-screen flex flex-col items-center p-4 md:p-8">
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}