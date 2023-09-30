import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";

const User = ({ users }) => {
    return (
        <App>
            <Head title="User" />
            <div className="flex gap-5 p-5">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="card w-96 bg-base-100 shadow-xl"
                    >
                        <div className="card-body">
                            <h2 className="card-title">{user.username}</h2>
                            <p>{user.email}</p>
                            <p>{user.role}</p>
                            <div className="card-actions justify-end">
                                <button className="btn hover:bg-orange-600 bg-orange-500 text-slate-950">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </App>
    );
};

export default User;
