import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner"

const LoginDataSchema = z.object({
    email: z.string().email(),
    password: z.coerce.string().min(8, { message: "Password should have minimum 8 characters." })
})
type LoginData = z.infer<typeof LoginDataSchema>

export default function LoginPage() {
    const [role, setRole] = useState<string>("user");
    const navigate = useNavigate();
    const form = useForm<LoginData>({
        resolver: zodResolver(LoginDataSchema)
    });

    function onSubmit(values: LoginData) {
        axios.post("http://localhost:3000/api/v1/auth/authenticate", values)
            .then((res) => {
                console.log(res.data.userRole);
                setRole(res.data.userRole);
                console.log(role);
                if (role.toLowerCase() === "user") {
                    navigate("/themes");
                } else {
                    navigate("/dashboard");
                }
            }).catch((err) => {
                console.log(err);
                toast.error("Invalid Credentials!")
            })
    }

    return (
        <div className="flex flex-wrap w-full">
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex justify-center pt-12">
                    <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
                        EventCraft.
                    </Link>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center px-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        {/* <div className="flex flex-col justify-center px-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"> */}
                        <p className="text-3xl text-center text-gray-950 font-semibold md:pb-4">
                            Welcome Back.
                        </p>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="ml-1">
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="sid@example.com" {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="ml-1">
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password here..." {...field} type="password" autoComplete="current-passwords" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="btn btn-outline btn-success bg-green-50 mt-12" type="submit">
                            Submit
                        </Button>
                        <div className="mt-12 text-center text-gray-900">
                            <p>
                                Don&#x27;t have an account?{' '}
                                <Link to="/user/SignUp/" className="font-semibold underline">
                                    Register here.
                                </Link>
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
            <Toaster richColors />
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="/src/assets/img/pexels-sam-lion-5732440.jpg" alt="cripptity crappity" />
            </div>
        </div>

    )
}