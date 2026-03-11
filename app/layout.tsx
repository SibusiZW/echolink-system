import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "sonner";
import LayoutWrapper from "@/components/layout-wrapper"; // Your new client component

export const metadata: Metadata = {
  title: "EchoLink",
  description: "School Wide Emergency & Announcements System...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#dddddd] antialiased flex`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
