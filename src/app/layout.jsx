import { Inter } from "next/font/google";
import "./globals.css";
import { WEB_INFO } from "./config/info";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: WEB_INFO.title,
  description: WEB_INFO.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
