import { useState } from "react";
import Chart from "react-apexcharts";
import { FaCalendarPlus, FaCheck, FaCircleCheck } from "react-icons/fa6"
import { motion } from "framer-motion";
import NotFoundPage from "@/pages/NotFound";
import AdminSideBar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";

export default function DashboardPage() {
    const [admin] = useState<boolean>(true);
    if (admin)
        return <Dashboard />
    return <NotFoundPage />
}

type ApexChartsData = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

function Dashboard() {
    const [barGraphData] = useState<ApexChartsData>({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ["Classic", "Star Wars", "Enchanted Forest", "Dinosaurs", "Halloween"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 55, 21, 70, 25],
                color: "#0D6EFD"
            }
        ]
    });
    const [lineGraphData] = useState<ApexChartsData>({
        options: {
            chart: {
                id: "basic-line"
            },
            xaxis: {
                categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
            }
        },
        series: [
            {
                data: [100, 115, 140, 145, 165, 160],
                color: "#0D6EFD"
            }
        ]
    })

    return (
        <div className="grid bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <AdminSideBar selected="dashboard" />
            <div className="flex flex-col">
                <AdminHeader label="Dashboard" />
                <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex flex-row w-full justify-between">
                        <div className="p-2 w-full">
                            <motion.div
                                className="border shadow-md border-gray-200 px-4 py-6 rounded-lg bg-green-50"
                                whileHover={{ scale: 1.05 }}
                                >
                                <FaCheck className="text-green-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                <p className="leading-relaxed">Completed</p>
                            </motion.div>
                        </div>
                        <div className="p-2 w-full">
                            <motion.div
                                className="border shadow-md border-gray-200 px-4 py-6 rounded-lg bg-red-50"
                                whileHover={{ scale: 1.05 }}
                                >
                                <FaCalendarPlus className="text-red-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                                <p className="leading-relaxed">Upcoming</p>
                            </motion.div>
                        </div>
                        <div className="p-2 w-full">
                            <motion.div
                                className="border shadow-md border-gray-200 px-4 py-6 rounded-lg bg-blue-50"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaCircleCheck className="text-blue-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-gray-900">1.4K</h2>
                                <p className="leading-relaxed">Overall</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-between">
                        <div className="p-2 w-full">
                            <div className="border shadow-md rounded-lg p-2 bg-gray-50">
                                <h2 className="text-xl mb-2">Bookings v/s theme</h2>
                                <Chart
                                    options={barGraphData.options}
                                    series={barGraphData.series}
                                    type="bar"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="border shadow-md rounded-lg p-2 bg-gray-50">
                                <h2 className="text-xl mb-2">Bookings v/s months</h2>
                                <Chart
                                    options={lineGraphData.options}
                                    series={lineGraphData.series}
                                    type="line"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    )
}