import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { CardContent, Card } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { FaEnvelope, FaEye, FaPenToSquare, FaPhone } from "react-icons/fa6"
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection'
import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"

export default function ProfilePage() {
    return (
        <>
            <Navbar />
            <Tabs defaultValue="view" className="w-full">
                <TabsList className="flex flex-row w-full bg-white tabs">
                    <TabsTrigger className="tab" role="tab" value="view">
                        <FaEye className="mr-1" />
                        View
                    </TabsTrigger>
                    <TabsTrigger className="tab" role="tab" value="edit">
                        <FaPenToSquare className="mr-1" />
                        Edit
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="view">
                    <ProfileView />
                </TabsContent>
                <TabsContent value="edit">
                    <ProfileEdit />
                </TabsContent>
            </Tabs>
        </>
    )
}

type ProfileData = {
    name: string;
    avatar: string;
    email: string;
    phoneNo: string;
}

function getAvatar(name: string) {
    return createAvatar(avataaars, { "seed": name }).png().toDataUri();
}

function ProfileView() {
    const [data, setData] = useState<ProfileData>({ name: "Alice Blue", avatar: "", email: "alice@example.com", phoneNo: "+1 (555) 123-4567" });
    useEffect(() => {
        getAvatar(data.name).then((avatar) => setData({ ...data, avatar: avatar }))
    }, [data])

    return (
        <div className="w-full py-6 space-y-3">
            <div className="container flex flex-col items-center justify-center px-4 space-y-2 md:px-6">
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <img
                            alt="Avatar"
                            className="rounded-full w-48 h-48 border shadow-md"
                            src={data.avatar}
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-center">{data.name}</h1>
                    <div className="flex flex-col">
                        <div>
                            <div className="inline-flex font-semibold text-md">
                                <FaEnvelope className="mr-1" />
                                <span className="inline">
                                    Email
                                </span>
                            </div>
                            <div>{data.email}</div>
                        </div>
                        <div>
                            <div className="inline-flex font-semibold">
                                <FaPhone className="mr-1" />
                                <span>
                                    Phone
                                </span>
                            </div>
                            <div>{data.phoneNo}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function ProfileEdit() {
    return (
        <div className="space-y-8 p-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Edit Profile</h1>
                <p className="text-gray-500 dark:text-gray-400">You can edit your profile information here.</p>
            </div>
            <Card className="card px-4 py-6 bg-gray-50 shadow-md mb-6">
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                        <Button variant="outline" className="btn btn-outline btn-success border-green-500">
                            Save Changes
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="card px-4 py-6 bg-gray-50 shadow-md mb-6">
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                    </div>
                    <Button variant="outline" className="btn btn-outline btn-success border-green-500">
                        Save Password
                    </Button>
                </CardContent>
            </Card>
            <Card className="card px-4 py-6 bg-gray-50 shadow-md mb-6">
                <CardContent className="space-y-4">
                    <p>
                        Are you sure you want to delete your account? This action is irreversible.
                    </p>
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Please type "DELETE" to confirm.</Label>
                        <Input placeholder="Type DELETE to confirm" type="text" />
                    </div>
                    <Button variant="outline" className="btn btn-outline btn-error border-red-500">
                        Delete my Account
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

