import App from "@/Layouts/App";
import React from "react";
import { Head } from "@inertiajs/react";

const SupplierPage = (props) => {
    return (
        <App>
            <Head title={props.title} />
            <div className="p-5">
                <h1 className="text-2xl text-gray-700">Daftar Supplier</h1>
                <div className="mt-5">
                    <Table data={props.data} />
                </div>
            </div>
        </App>
    );
};
const Table = ({ data }) => {
    console.log(data);
    return (
        <div className="flex flex-col bg-white rounded-md shadow-lg">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Company Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Contact Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Contact Phone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase"
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
                                        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.company_name}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.contact_email}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.contact_name}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.contact_phone}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
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

export default SupplierPage;
