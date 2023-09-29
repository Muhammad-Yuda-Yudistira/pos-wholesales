import React from "react";
import Navbar from "@/daisyui/Navbar";
import Sidebar from "@/daisyui/Sidebar";
import "../../css/main.css";
const App = ({ children }) => {
    return (
        <div className="bg-gray-200 w-full h-full">
            <Navbar />
            <Sidebar />
            <div className="ml-32 2xl:ml-24 pt-16">{children}</div>
        </div>
    );
};

export default App;
