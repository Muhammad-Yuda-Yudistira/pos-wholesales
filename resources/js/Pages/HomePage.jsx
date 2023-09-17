import React from "react";
import App from "../Layouts/App";
import { Head } from "@inertiajs/react";
import "./main.css";
import("preline");
import {
    HomeIcon,
    UserCircleIcon,
    InboxStackIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const HomePage = (props) => {
    const { totalProduct, totalUser } = props;

    return (
        <App>
            <Head title={props.title} />
            <div className="grid grid-cols-4 gap-x-5 mx-5 w-full">
                <Card
                    value={totalUser}
                    description="Users Active"
                    persentase="0.43%↑"
                >
                    <UserCircleIcon className="icons" />
                </Card>
                <Card
                    value={totalProduct}
                    description="Total Product"
                    persentase="0.43%↑"
                >
                    <InboxStackIcon className="icons" />
                </Card>
                <Card
                    value="$3.456K"
                    description="Total Product"
                    persentase="0.43%↑"
                >
                    <CurrencyDollarIcon className="icons" />
                </Card>
                <Card
                    value="$3.456K"
                    description="Total Product"
                    persentase="0.43%↑"
                >
                    <HomeIcon className="icons" />
                </Card>
            </div>
        </App>
    );
};

const Card = ({ children, value, description, persentase }) => {
    return (
        <div className=" bg-white dark:bg-slate-600 border-gray-200 border shadow-md p-5">
            {children}
            <h1 className="text-2xl text-gray-900 font-extrabold">{value}</h1>
            <div className="flex justify-between">
                <p className="text-gray-500">{description}</p>
                <p className="text-emerald-500 font-medium">{persentase}</p>
            </div>
        </div>
    );
};

export default HomePage;
