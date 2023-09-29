import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";

const Dashboard = (props) => {
    return (
        <App>
            <Head title="Dashboard" />
            <div className="grid grid-cols-4 gap-5 m-5">
                <Card name="Total Product" />
                <Card name="Total Revenue" />
                <Card name="Stock Product" />
                <Card name="Stock Revenue" />
            </div>
        </App>
    );
};

const Card = ({ name }) => {
    return (
        <div className="stats shadow">
            <div className="stat">
                <div className="stat-title">{name}</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
            </div>
        </div>
    );
};

export default Dashboard;
