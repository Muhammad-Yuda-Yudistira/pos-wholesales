import App from "@/Layouts/App";
import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Input from "@/Components/myComponent/Input";
import Select from "@/Components/myComponent/Select";
import Alert from "@/Components/myComponent/Alert";
import { router } from "@inertiajs/react";
const AddStock = (props) => {
    console.log(props);
    const { data, product } = props;
    const [isNotif, setIsNotif] = useState(false);
    const [form, setForm] = useState({
        product_id: 0,
        quantity_in_stock: null,
    });

    const handleChange = (e) => {
        const { name, value = null } = e.target;
        const newValue =
            name === "product_id" || name === "quantity_in_stock"
                ? parseFloat(value)
                : value;
        setForm({
            ...form,
            [name]: newValue,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(form);
        router.post("/product/stock/store", form);
        setIsNotif(true);
        setForm({
            product_id: 0,
            quantity_in_stock: 0,
        });
    };
    return (
        <App>
            <Head title="Add Stock" />
            <div className="p-5 w-full">
                {isNotif && (
                    <Alert className="w-96 mb-3" msg={props.flash.message} />
                )}
                <div className="grid grid-cols-3 gap-x-5 w-full">
                    <div className="bg-white p-5 h-full shadow-lg rounded-xl border">
                        <h1 className="text-2xl text-white bg-blue-500 py-2 text-center rounded-lg shadow-md mb-5">
                            Add New Stock
                        </h1>
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <Input.label name="product" id="product_id" />
                                <Select
                                    value={form.product_id}
                                    name="product_id"
                                    id="product_id"
                                    onChange={handleChange}
                                >
                                    <option>Select Product</option>
                                    {product.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="mb-3">
                                <Input.label name="Quantity" id="quantity" />
                                <Input
                                    value={form.quantity_in_stock}
                                    onChange={handleChange}
                                    name="quantity_in_stock"
                                    id="quantity"
                                    placeholder="Qty"
                                />
                            </div>
                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="py-3 px-4 mt-5 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-5 w-full shadow-lg rounded-xl col-span-2 border">
                        <h1 className="text-2xl text-white bg-blue-500 py-2 text-center rounded-lg shadow-md mb-5">
                            Recent Stock
                        </h1>
                        <div>
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Quantity In Stock
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    {props.inventory.map((item) => (
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {item.product.name}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                {item.product.category.name}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                {item.quantity_in_stock}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default AddStock;
