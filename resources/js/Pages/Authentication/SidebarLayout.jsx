import React from "react";
import { Icon } from "@iconify/react";

const SidebarLayout = () => {
    return (
        <div className=" bg-fuchsia-900 hidden lg:inline">
            <div className="flex justify-center flex-col items-center h-full">
                <h1 className="text-center text-4xl font-bold text-white">
                    Smart POS
                </h1>
                <ar className="text-center text-lg italic font-bold text-white">
                    "POS Pintar untuk Bisnis Sukses Anda"
                </ar>
                <Icon
                    icon="bx:store"
                    className="text-[300px] text-orange-500"
                />
                <h1 className="text-white">Version 1.0.0</h1>
            </div>
        </div>
    );
};

export default SidebarLayout;
