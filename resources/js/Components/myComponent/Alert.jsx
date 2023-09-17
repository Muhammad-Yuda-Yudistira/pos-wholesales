import React from "react";
import preline from "preline";
const Alert = ({ msg }) => {
    return (
        <div>
            <div
                id="dismiss-alert"
                className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-teal-50 border border-teal-200 rounded-md p-4"
                role="alert"
            >
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg
                            className="h-4 w-4 text-teal-400 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <div className="text-sm text-teal-800 font-medium">
                            {msg}
                        </div>
                    </div>
                    <div className="pl-3 ml-auto">
                        <div className="-mx-1.5 -my-1.5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
