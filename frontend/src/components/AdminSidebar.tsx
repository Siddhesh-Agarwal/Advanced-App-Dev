import NavLink from "@/types/NavLink";
import { FaCalendar, FaGear, FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavLinks: NavLink[] = [
    {
        label: "Dashboard",
        to_url: "/admin/dashboard/",
        icon: <FaHouse className="h-4 w-4" />
    },
    {
        label: "Events",
        to_url: "/admin/events/",
        icon: <FaCalendar className="h-4 w-4" />
    },
    {
        label: "Manage",
        to_url: "/admin/manage/",
        icon: <FaGear className="h-4 w-4" />
    },
]


export default function AdminSideBar({selected}: {selected: "dashboard" | "events" | "manage"}) {
    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibol" to="/">
                        <span className="bg-black text-white py-2 px-3">EventCraft.</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {
                            NavLinks.map((ele: NavLink, index: number) => {
                                return (
                                    <Link
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${(selected===ele.label.toLowerCase())?"text-black bg-gray-100 font-bold":"text-gray-800 bg-white"} transition-all hover:text-gray-900`}
                                        to={ele.to_url} key={index}
                                    >
                                        {ele.icon}
                                        {ele.label}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}