import App from "@/Layouts/App";
import React from "react";
import { Head } from "@inertiajs/react";
import Input from "@/Components/myComponent/Input";

const SalesOrder = (props) => {
    return (
        <App>
            <Head title="Sales Order" />
            <div className="grid grid-cols-3 w-full">
                <div className="bg-white p-5">
                    <div className="mb-2">
                        <Input.label name="Customer" />
                        <Input name="customer" placeholder="Customer" />
                    </div>
                    <div className="mb2">
                        <Input.label name="Tanggal" />
                        <Input name="tanggal" type="date" />
                    </div>
                    <div className="mb-2 w-full mt-4">
                        <button
                            type="button"
                            class="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
                <div className="bg-blue-600 col-span-2">
                    {props.product.map((item) => (
                        <p className="text-white">{item.name}</p>
                    ))}
                </div>
            </div>
        </App>
    );
};

export default SalesOrder;
