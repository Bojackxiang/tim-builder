import { Inter } from "next/font/google";
import { WEB_INFO } from "./config/info";
import "./globals.css";

import { Header } from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: WEB_INFO.title,
  description: WEB_INFO.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
