import React, { Children } from "react";
import { Link } from "@inertiajs/react";
import {
    HomeIcon,
    UserCircleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@heroicons/react/24/outline";

const ButtonDropdown = (props) => {
    return (
        <li className="hs-accordion" id="projects-accordion">
            <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-slate-200 rounded-md hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
                {props.children}
                <ChevronUpIcon className="hs-accordion-active:block ml-auto hidden w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
                <ChevronDownIcon className="hs-accordion-active:hidden ml-auto block w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
            </a>

            <div
                id="projects-accordion-sub"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
                <Child />
            </div>
        </li>
    );
};

const Child = ({ children }) => {
    return <ul className="pt-2 pl-2">{children}</ul>;
};

const Menu = ({ className = "", children, ...props }) => {
    return (
        <li>
            <Link
                {...props}
                className={
                    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" +
                    className
                }
            >
                Ini adalah tes
            </Link>
        </li>
    );
};

ButtonDropdown.Menu = Menu;
ButtonDropdown.child = Child;

export default ButtonDropdown;
