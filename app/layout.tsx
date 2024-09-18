import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/constants/fonts";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  title: "MKV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.plus_jakarta_sans.className}>
      <ThemeProvider>
        <body className="bg-light-common-light dark:bg-dark-common-dark">
          <AnimatePresence>{children}</AnimatePresence>
        </body>
      </ThemeProvider>
    </html>
  );
}
