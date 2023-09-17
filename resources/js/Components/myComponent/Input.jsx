import React from "react";

const Input = ({ type, placeholder, ...props }) => {
    return (
        <div>
            <input
                type={type}
                {...props}
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder={placeholder}
            ></input>
        </div>
    );
};

const Label = ({ id, name }) => {
    return (
        <label
            htmlFor={id}
            className="block text-sm font-medium mb-2 dark:text-white"
        >
            {name}
        </label>
    );
};

const TextArea = ({ placeholder, ...props }) => {
    return (
        <textarea
            {...props}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            rows="3"
            placeholder={placeholder}
        ></textarea>
    );
};

Input.label = Label;
Input.textarea = TextArea;
export default Input;
