import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaEnvelope, FaLockOpen, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { z } from "zod";

type SignUpForm = {
    name: string;
    email: string;
    password: string;
}

export default function SignUpPage() {
    const [signupData, setSignupData] = useState<SignUpForm>({ name: "", email: "", password: "" });

    function handleSubmit() {
        if (signupData.name.trim() === "" || signupData.email.trim() === "" || signupData.password === "") {
            toast.error("Please fill all fields")
        } else if (!z.string().min(5).max(50).safeParse(signupData.name).success) {
            toast.error("Name should be between 5 and 50 characters.")
        } else if (!z.string().email().safeParse(signupData.email).success) {
            toast.error("Invalid email address!")
        } else if (!z.string().min(8).max(20).safeParse(signupData.password).success) {
            toast.error("Password length should be between 8 and 20 characters")
        } else {
            toast.success("Registered successfully!")
            window.location.assign("/user/SignIn/")
        }
    }

    return (
        <div className="flex flex-wrap w-full">
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="/src/assets/img/pexels-melissa-698907.jpg" alt="cripptity crappity" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex justify-center pt-12">
                    <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
                        EventCraft.
                    </Link>
                </div>
                <div className="flex flex-col justify-center px-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center text-gray-950 font-semibold">
                        Welcome.
                    </p>
                    <div className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <FaUser />
                                </span>
                                <input type="text" id="design-login-name" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="John Doe" />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <FaEnvelope />
                                </span>
                                <input type="text" id="design-login-email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <span className=" inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <FaLockOpen />
                                </span>
                                <input type="password" id="design-login-password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
                            </div>
                        </div>
                        <Button className="btn btn-outline btn-success bg-green-50 mt-12" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                    <div className="pt-12 text-center text-gray-900">
                        <p>
                            Already have an account?{' '}
                            <Link to="/user/SignIn/" className="font-semibold underline">
                                Login here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Toaster richColors />
        </div>
    )
}