import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayan Sharma Basketball Portfolio",
  description: "Official recruiting portfolio for Aayan Sharma",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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