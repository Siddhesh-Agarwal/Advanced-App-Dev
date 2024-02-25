import { HeroParallax } from "@/components/hero-parallax";

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}
const products = [
    {
        title: "Classic",
        thumbnail: "/src/assets/img/classic-theme.jpg",
        link: "/themes/1"
    },
    {
        title: "Star Wars",
        thumbnail: "/src/assets/img/starwars-theme.jpg",
        link: "/themes/2"
    },
    {
        title: "Enchanted Forest",
        thumbnail: "/src/assets/img/enchanted-forest-theme.jpg",
        link: "/themes/3"
    },
    {
        title: "Dinosaurs",
        thumbnail: "/src/assets/img/dino-theme.jpg",
        link: "/themes/4"
    },
    {
        title: "Halloween",
        thumbnail: "/src/assets/img/halloween-theme.jpg",
        link: "/themes/5"
    },
]
