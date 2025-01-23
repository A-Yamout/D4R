"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo1.png";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            href="/about"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                        <a
                            className="dbox-donation-page-button duration-200 text-white hover:bg-blue-800"
                            href="https://donorbox.org/dignity-for-refugees-relief-fund?default_interval=m"
                            style={{
                                background: "rgb(22, 73, 139)",
                                textDecoration: "none",
                                fontFamily: "Verdana, sans-serif",
                                display: "flex",
                                fontSize: "16px",
                                padding: "8px 24px",
                                borderRadius: "5px",
                                gap: "8px",
                                lineHeight: "24px",
                                width: "fit-content",
                            }}
                        >
                            <img
                                src="https://donorbox.org/images/white_logo.svg"
                                alt="Donorbox Logo"
                                style={{ marginRight: "8px" }}
                            />
                            Donate
                        </a>
                    </div>

                    <Link
                        href="/"
                        className="duration-200 text-zinc-300 hover:text-zinc-100"
                    >
                        <Image src={logo} alt="Logo" className="relative w-[20%] h-auto" />
                    </Link>
                </div>
            </div>
        </header>
    );
};
