import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const shantellSans = localFont({
  src: "./fonts/ShantellSans.ttf",
  variable: "--font-shantell-sans",
  weight: "100 900",
});
const patrickHand = localFont({
  src: "./fonts/patrickHand-Regular.ttf",
  variable: "--font-patrick-hand",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tavern Games",
  description: "of Dice Kingdom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shantellSans.variable} ${patrickHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
