"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  OctagonAlert,
  Settings,
} from "lucide-react"
import { Button } from "./ui/button"
import { supabase } from "@/lib/supabase"

const navItems = [
  { name: "Manage Announcements", href: "/backend", icon: Home },
  { name: "Manage Emergencies", href: "/backend/emergencies", icon: OctagonAlert }
]


export default function AdminSidebar() {
  const pathname = usePathname()

  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('login/')
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200 z-20">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
            <Settings className="text-white" size={22}/>
          </div>
          <span className="text-xl font-semibold">St Patrick's EchoLink</span>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                ${
                  isActive
                    ? "bg-green-500 text-white shadow-md"
                    : "hover:bg-slate-700/60"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <Button onClick={() => handleLogout()} className="bg-red-500 mt-2 ml-4 w-60 text-white shadow-md flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200">Log Out</Button>
      </div>


    </aside>
  )
}
