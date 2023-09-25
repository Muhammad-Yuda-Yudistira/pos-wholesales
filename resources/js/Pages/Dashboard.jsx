import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";

const Dashboard = (props) => {
    return (
        <App>
            <Head title="Dashboard" />
            <div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Total Page Views</div>
                        <div className="stat-value">89,400</div>
                        <div className="stat-desc">
                            21% more than last month
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Dashboard;
