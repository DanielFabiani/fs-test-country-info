import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Country Info App",
  description: "Full-Stack JS engineer test assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className=""
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="container mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
