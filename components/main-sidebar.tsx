"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Stethoscope,
  Pill,
  FileText,
  Settings,
  Activity,
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Patients", href: "/patients", icon: Users },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Doctors", href: "/doctors", icon: Stethoscope },
  { name: "Pharmacy", href: "/pharmacy", icon: Pill },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function MainSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-72 flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500">
            <Activity className="text-white" size={22} />
          </div>
          <span className="text-xl font-semibold">MediCare</span>
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
                    ? "bg-emerald-500 text-white shadow-md"
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
