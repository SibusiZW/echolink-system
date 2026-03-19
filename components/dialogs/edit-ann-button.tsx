'use client';

import { NotebookPen, Save } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function EditAnnButton({ id }: { id: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <NotebookPen size={18}/>
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Confirm editing</DialogTitle>

                <form>
                    <Input placeholder="Edit title" className="mb-2"/>
                    <Textarea placeholder="Edit description" className="mb-2"/>

                    <Button className="w-full">
                        <Save />
                        Save record
                    </Button>
                </form>
                <DialogDescription>
                    Are you sure you want to edit this?
                </DialogDescription>
            </DialogContent>

        </Dialog>
    )
}