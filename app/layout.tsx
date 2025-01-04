import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const notosans = Noto_Sans({
  weight: ["400","700"],
});


export const metadata: Metadata = {
  title: "fun-with-bandeiras",
  description: "bandeira do planeta",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notosans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
