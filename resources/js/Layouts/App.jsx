import React, { createContext } from "react";
import "../Pages/main.css";
import {
    HomeIcon,
    UserCircleIcon,
    InboxStackIcon,
    ArrowRightOnRectangleIcon,
    UserGroupIcon,
    ChevronRightIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import ButtonDropdown from "@/Components/myComponent/ButtonDropdown";
import Header from "@/Components/myComponent/Header";
import Dropdown from "@/Components/myComponent/Dropdown";

const App = ({ children }) => {
    return (
        <div className="bg-gray-100 dark:bg-slate-900">
            <div className="sticky top-0 inset-x-0 z-20 bg-gray-100 border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center py-4">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-600"
                        data-hs-overlay="#application-sidebar-dark"
                        aria-controls="application-sidebar-dark"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle Navigation</span>
                        <svg
                            className="w-5 h-5"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </button>
                    <ol
                        className="ml-3 flex items-center whitespace-nowrap min-w-0"
                        aria-label="Breadcrumb"
                    >
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                            Application Layout
                            <ChevronRightIcon className=" w-4 h-4 text-gray-400" />
                        </li>
                        <li
                            className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
                            aria-current="page"
                        >
                            Dashboard
                        </li>
                    </ol>
                </div>
            </div>
            <div
                id="application-sidebar-dark"
                className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0"
            >
                <div className="px-6">
                    <a
                        className="flex-none text-xl font-semibold text-white"
                        href="/"
                        aria-label="Brand"
                    >
                        {import.meta.env.VITE_APP_NAME}
                    </a>
                </div>
                <nav
                    className="hs-accordion-group p-6 w-full flex flex-col justify-between items-stretch h-full"
                    data-hs-accordion-always-open
                >
                    <ul className="space-y-1.5">
                        <Link className="link" href="/">
                            <HomeIcon className="w-5 h-5" />
                            Dashboard
                        </Link>
                        <Link className="link">
                            <UserCircleIcon className="w-5 h-5" />
                            Users
                        </Link>
                        <Link
                            activeclassname="bg-green-500"
                            className="link"
                            href="/product"
                        >
                            <InboxStackIcon className="w-5 h-5" />
                            Products
                        </Link>

                        <Link className="link" href="/customer">
                            <UserGroupIcon className="w-5 h-5" />
                            Customers
                        </Link>
                        <Link className="link">
                            <UsersIcon className="w-5 h-5" />
                            Employees
                        </Link>
                    </ul>
                    {/* untuk logout */}
                </nav>
            </div>

            <div className="w-full">
                <Header />
                <div className="inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100 py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default App;
