import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: "%s, Made with AI Video Generator | sorahero",
    default: "AI Video Generator | sorahero",
  },
  description: "AI Video Generator is used to make AI Video.",
  keywords:
    "sora,sorahero,sora ai,openai sora,video ai,ai video,sora video,ai video generator,text to video,sora ai video,sora ai video generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={  cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Toaster position="top-center"  />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
