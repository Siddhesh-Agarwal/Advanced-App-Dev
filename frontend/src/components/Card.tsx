import { Link } from "react-router-dom";
import { ThemePreview } from "../types/theme";
import { FaMoneyBill } from "react-icons/fa6"

export default function ThemeCard({ data }: { data: ThemePreview }) {
    return (
        <Link to={`/theme/${data.themeID}`}>
            <div className="card w-[420px] bg-base-100 shadow-xl flex flex-col">
                <img src={data.themeImageURL} alt={data.themeName} className="w-full rounded-t-2xl" />
                <div className="card-body">
                    <h2 className="card-title dark:text-gray-50">
                        {data.themeName}
                    </h2>
                    <h3 className="text-gray-900 dark:text-gray-200">
                        <span className="inline-flex mr-2">
                            <FaMoneyBill />
                        </span>
                        <span className="inline-flex">
                            {data.themeCost}
                        </span>
                    </h3>
                </div>
            </div>
        </Link>
    )
}