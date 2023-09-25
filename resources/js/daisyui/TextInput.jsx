import React, { useState } from "react";
import { Icon } from "@iconify/react";
const TextInput = ({ type = "text", eye = false, label, ...props }) => {
    const [show, setShow] = useState("password");
    const handleClick = (e) => {
        e.preventDefault();
        setShow((prevShow) => (prevShow === "text" ? "password" : "text"));
    };
    return (
        <>
            <label className="label">
                <span className="label-text text-slate-950">{label}</span>
            </label>
            <input
                {...props}
                type={eye ? show : type}
                placeholder={label}
                className="input input-bordered w-full focus:border-fuchsia-950"
            />
            {eye && (
                <button
                    onClick={handleClick}
                    className="p-2 absolute right-1 top-10"
                >
                    {show === "password" ? (
                        <Icon
                            className="text-2xl text-orange-500 "
                            icon="ph:eye"
                        />
                    ) : (
                        <Icon
                            className="text-2xl text-orange-500 "
                            icon="iconamoon:eye-off-light"
                        />
                    )}
                </button>
            )}
        </>
    );
};

export default TextInput;
