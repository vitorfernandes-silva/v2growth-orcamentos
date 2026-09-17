import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "V2 Growth | Propostas Comerciais",
  description: "Canal oficial e confidencial de propostas comerciais da V2 Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${dmMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#030712] text-[#ededed] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

