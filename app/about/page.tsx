"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function AboutUs() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            <Navigation />
            <div className="container flex flex-col items-center justify-center px-4 mx-auto pt-32 pb-32">
                <div className="w-full max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white">About Us</h1>
                    <p className="mt-6 text-lg text-zinc-300">
                        Welcome to Dignity For Refugees, a nonprofit organization dedicated to empowering and supporting refugees around the world. 
                        Founded with the mission to uphold the dignity and rights of displaced individuals, we provide essential resources, 
                        advocate for policy changes, and foster community-driven solutions.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-2 lg:gap-16">
                    <Card>
                        <img
                            src="/camp.jpg"
                            alt="Our Mission"
                            className="rounded-lg w-full h-64 object-cover"
                        />
                        <div className="mt-4 text-center">
                            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
                            <p className="mt-2 text-zinc-300">
                                We strive to ensure that every refugee has access to basic necessities, education, and the tools needed 
                                to rebuild their lives with dignity.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <img
                            src="/watertreat.jpg"
                            alt="Our Impact"
                            className="rounded-lg w-full h-64 object-cover"
                        />
                        <div className="mt-4 text-center">
                            <h2 className="text-2xl font-semibold text-white">Our Impact</h2>
                            <p className="mt-2 text-zinc-300">
                                Through grassroots initiatives and global partnerships, we have touched the lives of thousands, 
                                providing hope and support to those who need it most.
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-white">Get Involved</h2>
                    <p className="mt-4 text-lg text-zinc-300">
                        Join us in making a difference. Whether you want to volunteer, donate, or simply spread awareness, 
                        every effort helps us move closer to a world where everyone is treated with dignity and respect. Our most funded and active project is our water treatment facilitys for refugee camps in lebanon and jordan, volenteer positions will be posted soon.
                    </p>
                </div>
            </div>
        </div>
    );
}
