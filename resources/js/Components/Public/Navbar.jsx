import { Link } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-0.5 md:py-1 bg-green text-white shadow-lg transition">
                <div className="flex flex-wrap items-center justify-between w-full ">
                    <div className="">
                        <Link className="text-xl" href="">
                            <img src={route().t.url + "/img/logo_branco.svg"} className="h-14" alt="IFCE - Campus Sobral" />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
