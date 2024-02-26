import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FaEnvelope, FaLockOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { z } from "zod";

type LoginData = {
    email: string;
    password: string;
}

export default function LoginPage() {
    const [loginData, setLoginData] = useState<LoginData>({ email: "", password: "" })
    const admin: boolean = useAppSelector((state) => state.data.isAdmin);

    function handleSubmit() {
        if (loginData.email === "" || loginData.password === "") {
            toast.error("Please enter email and password")
        } else if (!z.string().email().safeParse(loginData.email).success) {
            toast.error("Invalid Email format")
        } else {
            toast.success("Authentication Successful")
            if (admin) {
                window.location.assign("/admin/")
            } else {
                window.location.assign("/themes/")
            }
        }
    }
    return (
        <div className="flex flex-wrap w-full">
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex justify-center pt-12">
                    <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
                        EventCraft.
                    </Link>
                </div>
                <div className="flex flex-col justify-center px-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center text-gray-950 font-semibold md:pb-4">
                        Welcome Back.
                    </p>
                    <div className="flex flex-col pt-4">
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 text-gray-500 shadow-sm">
                                    <FaEnvelope />
                                </span>
                                <input type="text" id="design-login-email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                    className="input rounded-none appearance-none w-full py-2 px-4 shadow-sm text-base border-gray-300" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border border-r-0  border-gray-300 text-gray-500 shadow-sm">
                                    <FaLockOpen />
                                </span>
                                <input type="password" id="design-login-password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    className="input rounded-none appearance-none w-full py-2 px-4 shadow-sm text-base border-gray-300" placeholder="Password" required />
                            </div>
                        </div>
                        <Button className="btn btn-outline btn-success bg-green-50 mt-12" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                    <div className="mt-12 text-center text-gray-900">
                        <p>
                            Don&#x27;t have an account?{' '}
                            <Link to="/user/SignUp/" className="font-semibold underline">
                                Register here.
                            </Link>
                        </p>
                    </div>
                    <Toaster richColors />
                </div>
            </div>
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="/src/assets/img/pexels-sam-lion-5732440.jpg" alt="cripptity crappity" />
            </div>
        </div>

    )
}