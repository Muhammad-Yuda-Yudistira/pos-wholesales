import React from "react";

const Select = ({ children, id, ...props }) => {
    return (
        <select
            {...props}
            id={id}
            className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        >
            {children}
        </select>
    );
};

const Option = ({ value, children }) => {
    return <option value={value}>{children}</option>;
};
Select.option = Option;

export default Select;
