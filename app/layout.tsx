import type { Metadata } from "next";
import "./globals.css";


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
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
