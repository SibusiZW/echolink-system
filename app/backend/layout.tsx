'use client';

import AdminSidebar from "@/components/admin-sidebar"
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"

export default function BackendLayout({ children }: { children: React.ReactNode }) {

    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                router.push('login/')
            }
        }

        checkUser();
    }, [router])

    return (
        <div>
            <AdminSidebar />
            <div className="ml-72">{children}</div>
        </div>
    )
}