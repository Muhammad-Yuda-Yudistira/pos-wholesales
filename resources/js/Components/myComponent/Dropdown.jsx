import React from "react";
import { Link } from "@inertiajs/react";
import {
    HomeIcon,
    UserCircleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@heroicons/react/24/outline";

const Dropdown = () => {
    return (
        <details class="p-2 group">
            <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-200 focus-visible:outline-none group-hover:text-slate-800">
                <HomeIcon className="w-5 h-5" />
                Products
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac08 desc-ac08"
                >
                    <title id="title-ac08">Open icon</title>
                    <desc id="desc-ac08">
                        icon that represents the state of the summary
                    </desc>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </summary>
            <p class="ml-2 mt-4 text-slate-500">
                All components are easily customizable to match your own
                project.
            </p>
        </details>
    );
};

export default Dropdown;
