import React from "react";
import SidebarLayout from "./SidebarLayout";
const AuthLayout = ({ children }) => {
    return (
        <div className="grid lg:grid-cols-3 h-screen bg-fuchsia-950 min-w-full">
            <div className="col-span-2 flex justify-center items-center">
                {children}
            </div>
            <SidebarLayout />
        </div>
    );
};

export default AuthLayout;
