import { Link } from "react-router-dom";
import { ThemePreview } from "../types/theme";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function ThemeCard({ data }: { data: ThemePreview }) {
    return (
        <Link to={`/theme/${data.themeID}`} className="flex">
            <Card className="flex flex-col bg-gray-50/75 dark:bg-slate-900">
                <CardContent className="flex flex-1 items-center justify-center w-full">
                    <img
                        alt="Classic"
                        className="overflow-hidden object-contain rounded-t-xl w-full h-auto"
                        src={data.themeImageURL}
                    />
                </CardContent>
                <CardHeader className="p-4">
                    <CardTitle className="text-2xl text-black dark:text-gray-100">{data.themeName}</CardTitle>
                    <CardDescription className="text-md text-gray-700 dark:text-gray-300">{data.themeDescription}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}
