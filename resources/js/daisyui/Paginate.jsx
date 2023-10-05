import React from "react";
import { Link } from "@inertiajs/react";

const Paginate = ({ data, total }) => {
    const newLinks = data.filter((item) => {
        return !isNaN(item.label);
    });
    const PrevNext = data.filter((item) => {
        return isNaN(item.label);
    });
    return (
        <div className="flex justify-between items-center">
            <p className="text-slate-900 text-lg">
                Showing {newLinks.length} of {total}
            </p>
            <div className="join mt-5">
                <Link
                    href={PrevNext[0].url}
                    className="join-item bg-white hover:bg-fuchsia-300 btn"
                >
                    &laquo;
                </Link>
                {newLinks.map((item, index) => (
                    <Link
                        href={item.url}
                        key={index}
                        className={
                            `join-item hover:bg-fuchsia-300 btn ` +
                            (item.active
                                ? "bg-fuchsia-800 text-white"
                                : "bg-white")
                        }
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href={PrevNext[1].url}
                    className="join-item bg-white hover:bg-fuchsia-300 btn"
                >
                    &raquo;
                </Link>
            </div>
        </div>
    );
};

export default Paginate;
