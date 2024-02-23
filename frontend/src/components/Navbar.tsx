import { FaRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar top-0 sticky z-20 justify-between bg-base-100 px-2 md:px-8">
            <Link to="/" className="flex flex-row ml-3">
                <div className="text-xl px-3 py-2 font-semibold ml-2 bg-black text-white">EventCraft.</div>
            </Link>
            <div className="flex-none gap-2">
                <FaRightFromBracket className="text-3xl mr-2"/>
                <Link to="/profile">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )
}
