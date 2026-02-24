"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Siren,
  Home,
  Megaphone,
  OctagonAlert,
  BadgeAlert,
  Shield,
  MessageCircle,
} from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Announcements", href: "/announcements", icon: Megaphone },
  { name: "Emergencies", href: "/emergencies", icon: OctagonAlert },
  { name: "Important Announcements", href: "/announcements/important", icon: Shield},
  { name: "Critical Emergencies", href: "/emergencies/critical", icon: BadgeAlert},
  { name: "Send Queries", href: "/queries", icon: MessageCircle }
]

export default function MainSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200 z-20">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
            <Siren className="text-white" size={22}/>
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
      </div>


    </aside>
  )
}
