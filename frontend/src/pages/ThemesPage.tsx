import ThemeCard from "@/components/ThemeCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemePreview } from "@/types/Theme";
import { BackgroundGradient } from "@/components/bg-gradient";

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
    {
        themeID: 6,
        themeName: "Confetti Theme",
        themeImageURL: "https://plus.unsplash.com/premium_photo-1667512875134-0f12ea18977b",
        themeDescription: "I mean, who doesn't like confetti and colors?"
    },
    {
        themeID: 7,
        themeName: "Beach Theme",
        themeImageURL: "https://images.unsplash.com/photo-1496843916299-590492c751f4",
        themeDescription: "The beach you like."
    },
    {
        themeID: 8,
        themeName: "Disco Theme",
        themeImageURL: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
        themeDescription: "It is time to disco 🕺🏻💃🏻"
    },
    {
        themeID: 9,
        themeName: "Barbie Theme",
        themeImageURL: "https://plus.unsplash.com/premium_photo-1661749376000-1e96fe6fddeb",
        themeDescription: "Hello Barbie!"
    },
]

export default function ThemesPage() {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <main className="px-8 py-12 min-h-screen">
                <h1 className="text-5xl underline font-bold mb-8">Themes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        Themes.map((theme: ThemePreview, index: number) => {
                            return (
                                <BackgroundGradient children={<ThemeCard data={theme} key={index} />} />
                            )
                        })
                    }
                </div>
            </main>
            <Footer />
        </div>

    )
}
