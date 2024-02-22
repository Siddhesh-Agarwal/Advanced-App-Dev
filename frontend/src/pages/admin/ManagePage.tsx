import { useState } from "react";
import NotFoundPage from "../NotFound";
import AdminSideBar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";

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
                <AdminHeader />
                <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
                    
                </main>
            </div>
        </div>
    )
}