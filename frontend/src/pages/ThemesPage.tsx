import axios from "axios"
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners"
import ThemeCard from "@/components/ThemeCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Error from "./Error";
import { Theme, ThemePreview } from "@/types/Theme";
import { BackgroundGradient } from "@/components/bg-gradient";

export default function ThemesPage() {
    const [themes, setThemes] = useState<Theme[]>([])
    const [err, setErr] = useState<boolean>(false);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/theme/")
            .then((res) => {
                console.log(res);
                setThemes(res.data);
            })
            .catch((err) => {
                console.info(err);
                setErr(true);
            })
    }, [])

    return (
        <div className="min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <main className="px-8 py-12 min-h-screen">
                <h1 className="text-5xl underline font-bold mb-8">Themes</h1>
                {
                    err ? (<Error />) : (
                        themes ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-purple-600">
                                {
                                    themes.map((theme: ThemePreview, index: number) => {
                                        return (
                                            <BackgroundGradient children={<ThemeCard data={theme} key={theme.themeId} />} key={index} />
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <HashLoader className="text-purple-500" />
                        )
                    )
                }
            </main>
            <Footer />
        </div>

    )
}
