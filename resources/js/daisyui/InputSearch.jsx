import React from "react";
import { Icon } from "@iconify/react";

const InputSearch = ({ ...props }) => {
    return (
        <div className="relative">
            <Icon
                className="absolute w-6 h-6 right-3 top-3 text-gray-500"
                icon="ri:search-line"
            />
            <input
                {...props}
                type="text"
                placeholder="search..."
                className="input input-bordered focus:border-fuchsia-900 w-full lg:w-96"
            />
        </div>
    );
};

export default InputSearch;
