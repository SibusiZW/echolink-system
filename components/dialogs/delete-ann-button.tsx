'use client';

import { Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

export default function DeleteAnnButton({ id }: { id: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <Trash2 size={18}/>
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle>Confirm deletion</DialogTitle>

                <Button variant={'destructive'}>Confirm delete</Button>
                <DialogDescription>
                    Are you sure you want to delete this? The record will be permanently deleted from our.
                </DialogDescription>
            </DialogContent>

        </Dialog>
    )
}