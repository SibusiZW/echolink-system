'use client';

import { Loader2, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function QueryForm() {

    function renderContent() {
        if (!loading) {
            return (
            <>
                <Send />
                Send query
            </>
        )
        } else {
            return <Loader2 className="animate-spin" />
        }
    }

    const [message, setMessage] = useState("");
    const [sender, setSender] = useState("");
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        setLoading(true);
        const { error } = await supabase.from('queries').insert({ message: message, sender: sender })
        setLoading(false);

        if (error) {
            setErr(error?.message)
            toast.error(err)
            return
        }
        setSender("");
        setMessage("");
        toast.success("Query sent succesfully!")
    }

    return (

        <div className="bg-white rounded-[10px] p-5 w-[300px]">
            <p className="text-gray-500 text-center mb-4">Send an inquiry to improve the app</p>

            <form onSubmit={handleSubmit}>
                <Textarea value={message} className="mb-2" placeholder="Enter a query to improve the system" onChange={(e) => setMessage(e.target.value)} required/>
                <Input value={sender} className="mb-4" placeholder="Enter your name" onChange={(e) => setSender(e.target.value)} required/>
                <Button type="submit" className="bg-green-500 hover:bg-green-200 w-full">
                    {renderContent()}
                </Button>
            </form>
        </div>
    )
}