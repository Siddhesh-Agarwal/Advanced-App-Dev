import { FaCalendarMinus, FaFileContract } from "react-icons/fa6"
import AdminSideBar from "@/components/AdminSidebar"
import AdminHeader from "@/components/AdminHeader"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import NotFoundPage from "@/pages/NotFound"
import { useAppSelector } from "@/redux/hooks"

export default function EventsPage() {
    const admin = useAppSelector((state) => state.data.isAdmin);
    if (admin)
        return (<Events />)
    return <NotFoundPage />
}
function Events() {
    return (
        <div className="grid bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <AdminSideBar selected="events"/>
            <div className="flex flex-col">
                <AdminHeader label="Upcoming Events"/>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="border shadow-md rounded-lg bg-gray-50">
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