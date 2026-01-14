import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./hover.css"
import Header from "./components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adigma",
  description: "Implementamos Odoo para digitalizar y optimizar tu negocio de manera eficiente y eficaz.",
  icons: {
    icon: "/images/logo.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
