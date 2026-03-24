'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteEmergency } from "@/server/emergencies";

export default function DeleteEmButton({ id }: { id: any }) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleDelete(id: any) {
        setLoading(true);
        await deleteEmergency(id);
        setLoading(false);
        router.refresh();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <Trash2 size={18}/>
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle>Confirm deletion</DialogTitle>

                <Button onClick={() => handleDelete(id)} variant={'destructive'}>
                    {loading ? <Loader2 className="animate-spin" /> : "Confirm delete"}
                </Button>
                <DialogDescription>
                    Are you sure you want to delete this? The record will be permanently deleted from our.
                </DialogDescription>
            </DialogContent>

        </Dialog>
    )
}