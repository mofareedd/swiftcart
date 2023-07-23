import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { Metadata } from "next";
import "../globals.css";
import PageHeader from "@/components/Header";
import { cn } from "@/lib/utils";
import "swiper/css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "SwiftCart",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body suppressHydrationWarning={true} className={inter.className}> */}
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
