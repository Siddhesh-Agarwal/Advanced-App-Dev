import ThemeCard from "@/components/ThemeCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemePreview } from "@/types/theme";

const Themes: ThemePreview[] = [
    {
        themeID: 1,
        themeName: "Classic",
        themeImageURL: "/src/assets/img/classic-theme.jpg",
        themeDescription: "Traditional birthday fun.",
    },
    {
        themeID: 2,
        themeName: "Star Wars",
        themeImageURL: "/src/assets/img/starwars-theme.jpg",
        themeDescription: "Execute order 66.",
    },
    {
        themeID: 3,
        themeName: "Enchanted Forest",
        themeImageURL: "/src/assets/img/enchanted-forest-theme.jpg",
        themeDescription: "Magical celebration in the woods.",
    },
    {
        themeID: 4,
        themeName: "Dinosaurs",
        themeImageURL: "/src/assets/img/dino-theme.jpg",
        themeDescription: "Rawwrrr 🦖",
    },
    {
        themeID: 5,
        themeName: "Halloween",
        themeImageURL: "/src/assets/img/halloween-theme.jpg",
        themeDescription: "Will sacrifice a child for extra."
    },
]

export default function ThemePage() {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <main className="px-8 py-12 min-h-screen">
                <h1 className="text-5xl underline font-bold mb-8">Themes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>

    )
}
