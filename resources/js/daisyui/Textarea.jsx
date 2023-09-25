import React from "react";

const Textarea = ({ className = "", label, ...props }) => {
    return (
        <>
            <label className="label">
                <span className="label-text text-slate-950">{label}</span>
            </label>
            <textarea
                {...props}
                className={
                    "textarea textarea-bordered w-full focus:border-fuchsia-950 " +
                    className
                }
                placeholder={label}
            ></textarea>
        </>
    );
};

export default Textarea;
