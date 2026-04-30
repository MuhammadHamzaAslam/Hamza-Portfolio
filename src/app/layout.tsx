import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import favicon from "../../public/images/favicon.webp";
import CustomCursor from "@/components/cursor";

// Font configuration
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'], 
});

export const metadata: Metadata = {
  title: "M Hamza - Web & Mobile App Developer",
  description: "Personal portfolio of Muhammad Hamza, Full-Stack MERN & React Native Developer",
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
      <head>
        <link rel="icon" type="image/x-icon" href={favicon.src}></link>
      </head>

      {/* Font class apply yahan hogi */}
      <body className={jakarta.className}>
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