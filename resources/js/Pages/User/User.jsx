import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import ModalDetailUser from "./ModalDetailUser";

const User = ({ users }) => {
    const handleClick = (item) => {
        console.log(item);
        <ModalDetailUser data={item} />;
        document.getElementById("modalDetail").showModal();
    };
    return (
        <App>
            <Head title="User" />
            <div className="p-5">
                <h1 className="text-3xl font-semibold mb-3">
                    User Configuration
                </h1>
                <div className="overflow-x-auto bg-white shadow-md rounded-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Employee</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.employee &&
                                            item.employee.first_name +
                                                " " +
                                                item.employee.last_name}
                                    </td>
                                    <td className="gap-x-3 flex">
                                        <Link
                                            href={"/user/edit/" + item.id}
                                            className="btn btn-sm btn-fuchsia"
                                        >
                                            Update User
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleClick(item);
                                            }}
                                            className="btn btn-sm btn-orange"
                                        >
                                            Detail User
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    );
};

export default User;
