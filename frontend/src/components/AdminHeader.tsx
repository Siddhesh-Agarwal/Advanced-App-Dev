import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminHeader({label}: {label: string}) {
    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" to="/admin/dashboard/">
                <FaHouse />
                <span className="sr-only">Home</span>
            </Link>
            <div className="flex-1">
                <h1 className="font-semibold text-lg">{label}</h1>
            </div>
        </header>
    )
}