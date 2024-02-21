import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="relative h-screen overflow-hidden bg-indigo-900">
            <img src="/src/assets/img/bg.svg" className="absolute object-cover w-full h-full" alt="BG" />
            <div className="absolute inset-0 bg-black opacity-25">
            </div>
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container px-6 py-4 mx-auto md:px-12">
                    <div className="items-center justify-center flex">
                        <div className="items-center flex">
                            <Link to="/themes" className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Themes
                            </Link>
                            <Link to="/contact" className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Contact
                            </Link>
                            <Link to="/user/SignIn" className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-center w-full">
                    <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
                        Life-changing
                    </h1>
                    <Link to="/themes" className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900">
                        Start Now
                    </Link>
                </div>
            </div>
        </div>
    )
}
