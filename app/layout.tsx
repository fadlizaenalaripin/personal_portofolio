import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fadli Zaenal Aripin — Full Stack Developer & Data Analyst",
  description:
    "Portfolio of Fadli Zaenal Aripin. Full Stack Web Developer and Data Analyst from Cirebon, Indonesia. Building real digital products for real clients worldwide.",
  keywords: ["Fadli Zaenal Aripin", "Full Stack Developer", "Data Analyst", "Cirebon", "Indonesia", "Web Developer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased bg-[#0a1020] text-white overflow-x-hidden selection:bg-white selection:text-[#0a1020]">
        {children}
      </body>
    </html>
  );
}
