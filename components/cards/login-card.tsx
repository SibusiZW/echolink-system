'use client';
import { Loader2, LogIn } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function LoginCard() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.SubmitEvent) {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email: email, password: password })

        if (error) {
            toast.error(`Error: ${error?.message}`)
            return
        }
        toast.success("Logged In!")
        setLoading(false);
    }

    function renderContent() {
        if (loading) return <Loader2 className="animate-spin"/>
        else return <><LogIn /> Log In</>
    }

    return (
        <div className="p-6 w-full max-w-[350px] bg-white rounded-xl shadow-md">
            <div className="flex items-center justify-center">
                <LogIn size={80} className="text-green-500 mb-4"/>
            </div>

            <form onSubmit={handleLogin}>
                <Input value={email} placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)} className="mb-2"/>
                <Input value={password} placeholder="Enter password" type="password" onChange={(e) => setPassword(e.target.value)} className="mb-2"/>

                <Button className="w-full">{renderContent()}</Button>
            </form>
        </div>
    )
}