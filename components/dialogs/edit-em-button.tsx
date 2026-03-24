'use client';

import { Loader2, NotebookPen, Save } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EditEmButton({ id }: { id: any }) {

    const [record, setRecord] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getRecord = async () => {
            const { data } = await supabase.from('emergencies').select('*').eq('id', id).single();
            setRecord(data);
        }
        getRecord();
    }, [])

    async function handleUpdate(e: React.SubmitEvent) {
        setLoading(true);
        await supabase.from('emergencies').update({ title: record.title, description: record.description }).eq('id', record.id)
        setLoading(false);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <NotebookPen size={18}/>
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Confirm editing</DialogTitle>

                <form onSubmit={handleUpdate}>
                    <Input value={record?.title} placeholder="Edit title" className="mb-2" onChange={(e) => setRecord({...record, title: e.target.value })}/>
                    <Textarea value={record?.description} placeholder="Edit description" className="mb-2" onChange={(e) => setRecord({ ...record, description: e.target.value })}/>

                    <Button type="submit" className="w-full">
                        {loading ? <Loader2 className="animate-spin"/>: <><Save /> Save record</>}
                    </Button>
                </form>
                <DialogDescription>
                    Are you sure you want to edit this?
                </DialogDescription>
            </DialogContent>

        </Dialog>
    )
}