import type { Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";
import { rootMetadata } from "@/lib/metadata";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = rootMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#09090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={geist.variable}>
      <body className="min-h-[100dvh] overflow-x-clip overflow-y-auto bg-zinc-950 text-zinc-100 antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
