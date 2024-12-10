import { PlusIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export default function Header({ setList, list }) {
    const [openModal, setOpenModal] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.id = Date.now();
        setList((prev) => [...prev, data]);
        setOpenModal(false);
    }

    return (
        <header className="bg-blue-500 py-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-5">
                <h1 className="text-3xl font-bold text-white">News Portal</h1>
                <Dialog onOpenChange={setOpenModal} open={openModal}>
                    <DialogTrigger
                        onClick={() => setOpenModal(true)}
                        className={buttonVariants({ variant: "secondary" })}
                    >
                        <PlusIcon />
                        <span className="ml-2">Yangi yangilik qo'shish</span>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Yangi yangilik qo'shish</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="newsName">Yangilik nomi</Label>
                                <Input
                                    id="newsName"
                                    name="newsName"
                                    placeholder="Yangilik nomini kiriting"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="newsBody">
                                    Yangilik haqida
                                </Label>
                                <Textarea
                                    id="newsBody"
                                    name="newsBody"
                                    placeholder="Yangilik haqida batafsil"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Qo'shish
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    );
}
