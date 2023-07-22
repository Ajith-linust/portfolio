import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Hey, This is Ajith`,
  description: `Showcasing an extensive portfolio of cutting-edge UI designs, Ajith's ReactJS Canvas features an array of front end projects expertly crafted using ReactJS. Discover the transformative potential of stellar UI for your websites and apps.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
