import { HeroParallax } from "@/components/hero-parallax"
import { Link } from "react-router-dom"
import Confetti from 'react-confetti'
import ParallaxItem from "@/types/parallaxItem"

const products: ParallaxItem[] = [
    {
        title: "Classic Theme",
        thumbnail: "/src/assets/img/classic-theme.jpg",
        link: "/themes/1"
    },
    {
        title: "Star Wars Theme",
        thumbnail: "/src/assets/img/starwars-theme.jpg",
        link: "/themes/2"
    },
    {
        title: "Enchanted Forest Theme",
        thumbnail: "/src/assets/img/enchanted-forest-theme.jpg",
        link: "/themes/3"
    },
    {
        title: "Dinosaurs Theme",
        thumbnail: "/src/assets/img/dino-theme.jpg",
        link: "/themes/4"
    },
    {
        title: "Halloween Theme",
        thumbnail: "/src/assets/img/halloween-theme.jpg",
        link: "/themes/5"
    },
    {
        title: "Confetti Theme",
        thumbnail: "https://plus.unsplash.com/premium_photo-1667512875134-0f12ea18977b",
        link: "/themes/6"
    },
    {
        title: "Beach Theme",
        thumbnail: "https://images.unsplash.com/photo-1496843916299-590492c751f4",
        link: "/themes/7"
    },
    {
        title: "Disco Theme",
        thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
        link: "/themes/8"
    },
    {
        title: "Barbie Theme",
        thumbnail: "https://plus.unsplash.com/premium_photo-1661749376000-1e96fe6fddeb",
        link: "/themes/9"
    },
    {
        title: "Classic Theme",
        thumbnail: "/src/assets/img/classic-theme.jpg",
        link: "/themes/1"
    },
    {
        title: "Star Wars Theme",
        thumbnail: "/src/assets/img/starwars-theme.jpg",
        link: "/themes/2"
    },
    {
        title: "Enchanted Forest Theme",
        thumbnail: "/src/assets/img/enchanted-forest-theme.jpg",
        link: "/themes/3"
    },
    {
        title: "Dinosaurs Theme",
        thumbnail: "/src/assets/img/dino-theme.jpg",
        link: "/themes/4"
    },
    {
        title: "Halloween Theme",
        thumbnail: "/src/assets/img/halloween-theme.jpg",
        link: "/themes/5"
    },
    {
        title: "Confetti Theme",
        thumbnail: "https://plus.unsplash.com/premium_photo-1667512875134-0f12ea18977b",
        link: "/themes/6"
    },
]

type FAQ = {
    question: string;
    answer: string;
}

const FAQs: FAQ[] = [
    {
        question: "How does the product work?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquid, vitae nemo perferendis incidunt culpa velit iure! Quibusdam voluptates quis minus. Illo amet omnis sit corporis, incidunt neque dolorum! Dolorem!"
    },
    {
        question: "What are the features?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquid, vitae nemo perferendis incidunt culpa velit iure! Quibusdam voluptates quis minus. Illo amet omnis sit corporis, incidunt neque dolorum! Dolorem!"
    },
    {
        question: "What are the integrations?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquid, vitae nemo perferendis incidunt culpa velit iure! Quibusdam voluptates quis minus. Illo amet omnis sit corporis, incidunt neque dolorum! Dolorem!"
    },
    {
        question: "How does the product work?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquid, vitae nemo perferendis incidunt culpa velit iure! Quibusdam voluptates quis minus. Illo amet omnis sit corporis, incidunt neque dolorum! Dolorem!"
    },
]

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white border-b z-10">
                <Link className="flex items-center justify-center bg-black text-white px-3 py-2" to="/">
                    EventCraft.
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="/themes/">
                        Themes
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact/">
                        Contact
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="/user/SignIn/">
                        Login
                    </Link>
                </nav>
            </header>

            {/* Main content */}
            <main className="flex flex-col items-center h-screen">
                <Confetti className="w-screen h-screen" numberOfPieces={125} gravity={0.05} initialVelocityY={8} opacity={0.75} />
                <div className="hero flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
                    <p className="mb-4 font-semibold text-indigo-500 md:mb-6 text-3xl md:text-6xl">Plan the Perfect Party</p>

                    <h1 className="mb-8 text-gray-800 text-lg md:mb-12 md:text-2xl">
                        Easy planning. Beautiful invitations. Fun for everyone.
                    </h1>

                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link to="/themes/" className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-indigo-600 transition-colors duration-300 ease-out border-2 border-indigo-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-indigo-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-600 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Browse Themes</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 group-hover:bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                    </div>
                </div>
            </main >

            <section className="w-screen min-h-screen">
                <HeroParallax products={products} />
            </section>

            {/* FAQs */}
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-indigo-600 md:mb-6 lg:text-3xl">Frequently asked questions</h2>
                    </div>

                    <div className="mx-auto flex max-w-screen-sm flex-col border-t">
                        {FAQs.map((faq: FAQ, index: number) => {
                            return (
                                <div className="border-b" key={index}>
                                    <div className="flex cursor-pointer gap-2 py-4 text-black hover:text-indigo-500">
                                        <span className="font-semibold transition duration-100 md:text-lg">{faq.question}</span>
                                    </div>

                                    <p className="mb-4 text-gray-500 ml-4 text-justify">
                                        {faq.answer}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}