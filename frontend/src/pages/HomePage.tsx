import { Link } from "react-router-dom"
import { SparklesCore } from "@/components/sparkles"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
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
            <main className="flex flex-col items-center h-screen">
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#198754"
                    />
                </div>
                <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
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
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-indigo-600 md:mb-6 lg:text-3xl">Frequently asked questions</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>

                    <div className="mx-auto flex max-w-screen-sm flex-col border-t">
                        <div className="border-b">
                            <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                <span className="font-semibold transition duration-100 md:text-lg">How does the product work?</span>

                                <span className="text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>
                        <div className="border-b">
                            <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                <span className="font-semibold transition duration-100 md:text-lg">What are the features?</span>

                                <span className="text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>
                        <div className="border-b">
                            <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                <span className="font-semibold transition duration-100 md:text-lg">What about integrations?</span>

                                <span className="text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>
                        <div className="border-b">
                            <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                <span className="font-semibold transition duration-100 md:text-lg">Is support available?</span>

                                <span className="rotate-180 text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="mb-4 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
