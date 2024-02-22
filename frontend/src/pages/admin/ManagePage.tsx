import { useState } from "react";
import NotFoundPage from "../NotFound";
import AdminSideBar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function ManagePage() {
    const [admin] = useState<boolean>(true);
    if (admin)
        return <Manage />
    return <NotFoundPage />
}

function Manage() {
    return (
        <div className="grid bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <AdminSideBar selected="manage" />
            <div className="flex flex-col">
                <AdminHeader label="Manage Themes" />
                <main className="flex justify-center gap-4 p-4 md:gap-8 md:p-6">
                    <Card className="w-full md:w-1/2 bg-gray-50 shadow-md">
                        <h1 className="text-3xl text-center font-semibold py-4">Add Theme</h1>
                        <form className="grid gap-4 p-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Theme Name</Label>
                                <Input id="title" placeholder="Title" className="input bg-gray-50 focus:bg-gray-100" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Theme Description</Label>
                                <Textarea id="description" placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="file">Theme Cost</Label>
                                <Input id="cost" type="number" placeholder="₹500" className="input bg-gray-50 focus:bg-gray-100" defaultValue={500} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="file">Theme Image</Label>
                                <Input id="file" type="file" className="input bg-gray-50 focus:bg-gray-100" required />
                            </div>
                            <Button className="btn btn-success btn-outline bg-gray-50" type="submit">Submit</Button>
                        </form>
                    </Card>
                </main>
            </div>
        </div>
    )
}