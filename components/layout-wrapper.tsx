'use client';
import { usePathname } from "next/navigation";
import MainSidebar from "@/components/main-sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname?.startsWith("/login") || pathname?.startsWith("/auth");

  return (
    <>
      {!hideSidebar && <MainSidebar />}
      <main className={`flex-1 p-8 ${hideSidebar ? '' : 'ml-72'}`}>
        {children}
      </main>
    </>
  );
}
