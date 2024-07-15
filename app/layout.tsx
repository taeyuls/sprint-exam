import Gnb from "@/components/gnb/Gnb";
import type { Metadata } from "next";
import local from 'next/font/local';
import './globals.css';

const nanumSquare = local({
  src: [
    {
      path: '../public/fonts/NanumSquareR.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/NanumSquareB.otf',
      weight: '800',
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: "Do it",
  description: "Todo list",
  icons: {
    icon: '/icon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanumSquare.className}>
        <Gnb />
        {children}</body>
    </html>
  );
}
