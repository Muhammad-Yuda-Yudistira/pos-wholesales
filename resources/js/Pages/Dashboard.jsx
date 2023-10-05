import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";

const Dashboard = (props) => {
    console.log(props);
    return (
        <App>
            <Head title="Dashboard" />
            <div className="grid grid-cols-4 gap-5 m-5">
                <Card name="Total Product" value={props.totalProduct} />
                <Card
                    name="Total Revenue"
                    value={parseFloat(props.revenue).toLocaleString("id-ID")}
                />
                <Card name="Stock Product" />
                <Card name="Stock Revenue" />
            </div>
        </App>
    );
};

const Card = ({ name, value }) => {
    return (
        <div className="stats shadow">
            <div className="stat">
                <div className="stat-title">{name}</div>
                <div className="stat-value">{value}</div>
                <div className="stat-desc">21% more than last month</div>
            </div>
        </div>
    );
};

export default Dashboard;
