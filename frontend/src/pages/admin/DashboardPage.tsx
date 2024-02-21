/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3oAwmWm5UT7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../../components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../../components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table"
import { FaBell, FaCalendar, FaCalendarMinus, FaFileContract, FaGear, FaHouse } from "react-icons/fa6"
import { SVGProps, useState } from "react"
import { JSX } from "react/jsx-runtime"
import NotFoundPage from "../NotFound"
import { Link } from "react-router-dom"

export default function DashboardPage() {
    const [admin] = useState<boolean>(true);
    if (admin)
        return (<Dashboard />)
    return <NotFoundPage />
}
function Dashboard() {
    return (
        <div className="grid bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" to="/">
                            <Package2Icon className="h-6 w-6" />
                            <span className="">EventCraft.</span>
                        </Link>
                        <Button className="ml-auto h-8 w-8 rounded-md" size="icon" variant="outline">
                            <FaBell className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                to="/admin/dashboard"
                            >
                                <FaHouse className="h-4 w-4" />
                                Home
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                to="/admin/events"
                            >
                                <FaCalendar className="h-4 w-4" />
                                Events
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                to="/admin/settings"
                            >
                                <FaGear className="h-4 w-4" />
                                Settings
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full" size="sm">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <Link className="lg:hidden" to="/admin/dashboard">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="flex-1">
                        <h1 className="font-semibold text-lg">Upcoming Events</h1>
                    </div>
                    <Button className="ml-auto lg:ml-2" size="sm">
                        New Event
                    </Button>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="border shadow-sm rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Event</TableHead>
                                    <TableHead className="min-w-[150px]">Date</TableHead>
                                    <TableHead className="hidden md:table-cell">Type</TableHead>
                                    <TableHead className="hidden text-center md:table-cell">Guests</TableHead>
                                    <TableHead className="text-center">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">#3210</TableCell>
                                    <TableCell>February 14, 2023</TableCell>
                                    <TableCell>Barbie</TableCell>
                                    <TableCell className="hidden text-center md:table-cell">25</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="icon" variant="ghost">
                                            <FaFileContract className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <FaCalendarMinus className="w-4 h-4" />
                                            <span className="sr-only">RSVPs</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3209</TableCell>
                                    <TableCell>March 25, 2023</TableCell>
                                    <TableCell>Star Wars</TableCell>
                                    <TableCell className="hidden text-center md:table-cell">50</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="icon" variant="ghost">
                                            <FaFileContract className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <FaCalendarMinus className="w-4 h-4" />
                                            <span className="sr-only">RSVPs</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3204</TableCell>
                                    <TableCell>April 10, 2023</TableCell>
                                    <TableCell>Star Wars</TableCell>
                                    <TableCell className="hidden text-center md:table-cell">75</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="icon" variant="ghost">
                                            <FaFileContract className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <FaCalendarMinus className="w-4 h-4" />
                                            <span className="sr-only">RSVPs</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3203</TableCell>
                                    <TableCell>May 5, 2023</TableCell>
                                    <TableCell>Star Wars</TableCell>
                                    <TableCell className="hidden text-center md:table-cell">100</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="icon" variant="ghost">
                                            <FaFileContract className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <FaCalendarMinus className="w-4 h-4" />
                                            <span className="sr-only">RSVPs</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">#3202</TableCell>
                                    <TableCell>June 20, 2023</TableCell>
                                    <TableCell>Dinosaurs</TableCell>
                                    <TableCell className="hidden text-center md:table-cell">125</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="icon" variant="ghost">
                                            <FaFileContract className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <FaCalendarMinus className="w-4 h-4" />
                                            <span className="sr-only">RSVPs</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    )
}

function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}