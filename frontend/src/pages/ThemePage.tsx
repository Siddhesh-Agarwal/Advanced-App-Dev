import ThemeCard from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemePreview } from "../types/theme";

const Themes: ThemePreview[] = [
    {
        themeID: 1,
        themeName: "Star Wars",
        themeImageURL: "src/assets/img/StarWars.jpg",
        themeCost: 400
    },
    {
        themeID: 2,
        themeName: "Barbie",
        themeImageURL: "",
        themeCost: 500
    }
]

export default function ThemePage() {
    return (
        <>
            <Navbar />
            <main className="px-8 py-12 min-h-screen">
                <h1 className="text-5xl underline font-bold mb-8">Themes</h1>
                <div className="grid grid-cols-3 gap-6">
                    {
                        Themes.map((theme: ThemePreview, index: number) => {
                            return (
                                <ThemeCard data={theme} key={index} />
                            )
                        })
                    }
                </div>
            </main>
            <Footer />
        </>

    )
}
