import App from "@/Layouts/App";
import React from "react";
import { Rupiah } from "../config";
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

const ProductPage = ({ data }) => {
    console.log(data);
    return (
        <App>
            <Head title="Daftar Produk" />
            <div className="px-5">
                <header className="flex items-center justify-between">
                    <div>
                        <Link
                            href="/product/create"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                        >
                            Add New Product
                        </Link>
                    </div>
                    <h1 className="text-2xl text-gray-700">Daftar Produk</h1>
                </header>
                <div className="mt-5">
                    <Table data={data} />
                </div>
            </div>
        </App>
    );
};

const Table = ({ data }) => {
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
                                        Product Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Cost Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase"
                                    >
                                        Stock
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
                                {data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-sky-100 dark:hover:bg-gray-700"
                                    >
                                        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.category.name}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {Rupiah(item.price)}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {Rupiah(item.cost_price)}
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {item.stock}
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

export default ProductPage;
