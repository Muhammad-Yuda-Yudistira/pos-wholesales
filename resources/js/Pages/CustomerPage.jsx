import React from "react";
import App from "../Layouts/App";
import { Head, Link } from "@inertiajs/react";
const CustomerPage = (props) => {
    return (
        <App>
            <Head title={props.title} />
            <div className="p-5">
                <h1 className="text-2xl text-gray-700">List Customer</h1>
                <div className="mt-5">
                    <Table data={props.data} />
                </div>
            </div>
        </App>
    );
};

const Table = ({ data }) => {
    return (
        <div className="flex flex-col bg-white rounded-md">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        FullName
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Phone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 text-right text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-4 text-right text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {data.data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-sky-100 dark:hover:bg-gray-700"
                                    >
                                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {index + 1}
                                        </td>
                                        <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.first_name} {item.last_name}
                                        </td>
                                        <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.email}
                                        </td>
                                        <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.phone}
                                        </td>
                                        <td className="px-3 py-3  text-sm text-gray-800 dark:text-gray-200">
                                            {item.address}
                                        </td>
                                        <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                                            <a
                                                className="text-blue-500 hover:text-blue-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="py-1 px-4">
                            <nav className="flex items-center space-x-2"></nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerPage;
