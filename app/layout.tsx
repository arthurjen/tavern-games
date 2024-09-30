import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tavern Games",
  description: "of Dice Kingdom",
};

export const viewport: Viewport = {
  themeColor: "#F0A734",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-black font-rubrik bg-beige">{children}</body>
    </html>
  );
}
