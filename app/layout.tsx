import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "侨批生成器",
  description: "生成一封来自旧时代的侨批，把思念寄回家",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-qiaopi">
        <div className="max-w-md mx-auto bg-qiaopi-light min-h-screen relative">
          <Suspense fallback={<div className="min-h-screen bg-qiaopi-paper flex items-center justify-center"><div className="w-8 h-8 border-2 border-qiaopi-brown/30 border-t-qiaopi-red rounded-full animate-spin" /></div>}>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
