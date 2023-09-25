import React from "react";

const SelectInput = ({ label, data, ...props }) => {
    return (
        <>
            <label className="label">
                <span className="label-text text-slate-950">{label}</span>
            </label>
            <select
                {...props}
                className="select select-bordered w-full focus:border-fuchsia-950 "
            >
                <option value="">Select {label}</option>
                {data.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectInput;
