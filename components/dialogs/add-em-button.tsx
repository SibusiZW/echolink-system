'use client';

import { BadgePlus, Loader2, Save } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { addEmergency } from "@/server/emergencies";
import { useRouter } from "next/navigation";

export default function AddEmButton() {

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("0");

    const router = useRouter();

    async function handleSubmit(e: React.SubmitEvent) {
        setLoading(true);
        await addEmergency(title, description, priority)
        setLoading(false)
        router.refresh();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <BadgePlus />
                    Add emergency
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Add Emergency</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" className="mb-2" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} required/>
                        <Textarea className="mb-2" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} required/>
                        <Input type="number" className="mb-2" placeholder="Enter priority number (0 or 1)" onChange={(e) => setPriority(e.target.value)} required/>
                        
                        <Button className="w-full" type="submit">
                            {loading ? <Loader2 className="animate-spin"/> : <><Save /> Add emergency</>}
                        </Button>
                    </form>
                <DialogDescription>This adds a record into the DB</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}