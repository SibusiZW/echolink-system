import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import MainSidebar from "@/components/main-sidebar";


export const metadata: Metadata = {
  title: "EchoLink",
  description: "School Wide Emergency & Announcements System for St Patrick's. Made using Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex`}>
        <MainSidebar />
        <main className="flex-1 p-8 ml-72">
          {children}
        </main>
      </body>
    </html>
  );
}
