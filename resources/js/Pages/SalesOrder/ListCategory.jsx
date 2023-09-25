import React from "react";
import { usePage } from "@inertiajs/react";

const ListCategory = () => {
    const { categories } = usePage().props;
    return (
        <div className="flex gap-x-2 py-3 pr-5 overflow-x-scroll">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className="btn btn-sm lowercase btn-vanila"
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default ListCategory;
