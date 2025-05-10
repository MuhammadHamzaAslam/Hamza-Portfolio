import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import favicon from "../../public/images/favicon.webp";
import CustomCursor from "@/components/cursor";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Hamza - Web & Mobile App Developer",
  description: "Personal portfolio of M Hamza, Web & Mobile App Developer",
  icons: {
    icon: "https://ideogram.ai/assets/image/lossless/response/OfA5v_40R_6DjR2Kj7CfhQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head title="M Hamza - Web & Mobile App Developer">
        <link rel="icon" type="image/x-icon" href={favicon.src}></link>
      </head>

      <body className={inter.className}>
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
