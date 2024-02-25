import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="h-screen w-screen flex justify-center items-center">
                <Card className="w-full max-w-md mx-auto p-6 bg-gray-50 shadow-md">
                    <CardContent className="space-y-4">
                        <CardTitle className="text-3xl">Contact us</CardTitle>
                        <CardDescription>Enter your information and we'll get back to you.</CardDescription>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="label line-clamp-1" htmlFor="first-name">
                                    First name
                                </Label>
                                <Input id="first-name" placeholder="Enter your first name" className="input input-primary" />
                            </div>
                            <div className="space-y-2">
                                <Label className="label line-clamp-1" htmlFor="last-name">
                                    Last name
                                </Label>
                                <Input id="last-name" placeholder="Enter your last name" className="input input-primary" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="label">Phone Number</Label>
                            <Input id="phone" placeholder="Enter your phone number" type="tel" className="input input-primary" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="label">Message</Label>
                            <Textarea className="min-h-[100px] textarea textarea-primary" id="message" placeholder="Enter your message" />
                        </div>
                        <Button className="btn btn-outline btn-primary flex w-full" variant={"outline"}>
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </>
    )
}

