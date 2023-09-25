import React from "react";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const ButtonSidebar = ({ icon, text, ...props }) => {
    return (
        <Link
            {...props}
            className="w-full hover:scale-105 hover:transition-all hover:ease-in-out flex flex-col items-center group"
        >
            <Icon
                className="text-5xl group-hover:text-orange-500 text-white text-center"
                icon={icon}
            />
            <span className="text-white group-hover:text-orange-500 text-xs">
                {text}
            </span>
        </Link>
    );
};

export default ButtonSidebar;
