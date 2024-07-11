import React, { useEffect } from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import {
    Dropdown,
    initTWE,
} from "tw-elements";

function Navbar() {
    const { auth, title } = usePage().props;
    const { post } = useForm();

    useEffect(() => {
        initTWE({Dropdown})
    }, []);

    const onHandleLogout = () => {
        post(route('logout'));
    }

    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-0.5 md:py-1 bg-green text-white shadow-lg transition">
            <div className="w-full sm:hidden">
                <h1 className="text-xl font-semibold text-center">{title}</h1>
            </div>
            <div className="flex flex-wrap items-center justify-between w-full">
                <div className="flex">
                    <button
                        type="button"
                        className="p-2"
                        data-twe-collapse-init
                        data-twe-target="#sidebar"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        aria-controls="sidebar"
                        aria-expanded="false"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-7 w-7" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <Link className="text-xl" href={route('admin')}>
                        <img src={route().t.url + "/img/logo_branco.svg"} className="h-14" alt="IFCE - Campus Sobral" />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <h1 className="text-xl font-semibold">{title}</h1>
                </div>
                <div className="px-4">
                    <div data-twe-dropdown-ref>
                        <button className="flex items-center gap-2"
                            id="dropdownMenuButton2"
                            data-twe-dropdown-toggle-ref
                            aria-expanded="false"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-7 w-7" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            {auth.user.name.split(' ')[0]}
                        </button>
                        <ul
                            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-twe-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2"
                            data-twe-dropdown-menu-ref
                        >
                            <li>
                                <Link
                                    href={route('profile')}
                                    className="block w-full px-4 py-2 text-sm font-normal text-center text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                                    data-twe-dropdown-item-ref
                                >
                                    Perfil
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={onHandleLogout}
                                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                                    data-twe-dropdown-item-ref
                                >
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
