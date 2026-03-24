'use client';

import { BadgePlus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";

export default function AddEmButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <BadgePlus />
                    Add emergency
                </Button>
            </DialogTrigger>
        </Dialog>
    )
}