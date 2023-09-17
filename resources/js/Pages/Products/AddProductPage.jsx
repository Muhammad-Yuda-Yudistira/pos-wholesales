import App from "@/Layouts/App";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Input from "@/Components/myComponent/Input";
import Select from "@/Components/myComponent/Select";
import { router } from "@inertiajs/react";
import Alert from "@/Components/myComponent/Alert";
import { Rupiah } from "../config";

const AddProductPage = (props) => {
    console.log(props);
    const [isNotif, setIsNotif] = useState(false);
    const { categories } = props;
    const [form, setForm] = useState({
        name: "",
        category_id: 0,
        description: "",
        price: "",
        cost_price: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue =
            name === "price" || name === "cost_price" || name === "category_id"
                ? parseFloat(value)
                : value;
        setForm({
            ...form,
            [name]: newValue,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        setIsNotif(true);
        router.post("/product/store", form);
        setForm({
            name: "",
            category_id: 0,
            description: "",
            price: "",
            cost_price: "",
        });
    };
    return (
        <App>
            <Head title="Add Product" />
            <div className="p-5 w-full gap-x-5 grid grid-cols-3">
                <div className=" bg-white shadow-lg p-5 border rounded-lg">
                    <h1 className="text-2xl text-white text-center mb-3 py-2 rounded-md bg-blue-400 shadow-md">
                        Add Product
                    </h1>
                    <form onSubmit={submit}>
                        <div className="mb-2">
                            <Input.label name="Product Name" id="name" />
                            <Input
                                value={form.name}
                                onChange={handleChange}
                                id="name"
                                name="name"
                                placeholder="Product Name"
                            />
                        </div>
                        <div className="mb-2">
                            <Input.label name="Category" id="category_id" />
                            <Select
                                value={form.category_id}
                                name="category_id"
                                onChange={handleChange}
                                id="category_id"
                            >
                                <Select.option>Pilih Category</Select.option>
                                {categories.map((category) => {
                                    return (
                                        <Select.option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </Select.option>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="mb-2">
                            <Input.label
                                name="Description Product"
                                id="description"
                            />
                            <Input.textarea
                                value={form.description}
                                onChange={handleChange}
                                id="description"
                                name="description"
                                placeholder="Description"
                            />
                        </div>
                        <div className="mb-2">
                            <Input.label name="Price" id="price" />
                            <Input
                                value={form.price}
                                onChange={handleChange}
                                id="price"
                                name="price"
                                placeholder="Price"
                            />
                        </div>
                        <div className="mb-2">
                            <Input.label name="Cost Price" id="cost_price" />
                            <Input
                                value={form.cost_price}
                                onChange={handleChange}
                                id="cost_price"
                                name="cost_price"
                                placeholder="Cost Price"
                            />
                        </div>
                        <div className="mb-2">
                            <button
                                type="submit"
                                className="py-3 px-4 mt-5 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-col bg-white rounded-lg shadow-lg">
                        <h1 className="text-2xl text-white text-center my-5 py-2 rounded-md bg-blue-400 mx-5 shadow-md">
                            Recent Product
                        </h1>
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden mx-5">
                                    {isNotif && (
                                        <Alert msg={props.flash.message} />
                                    )}
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Category
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    Cost Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {props.product.map((product) => {
                                                return (
                                                    <tr
                                                        key={product.id}
                                                        className="hover:bg-sky-100 dark:hover:bg-gray-700"
                                                    >
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                            {product.name}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                            {
                                                                product.category
                                                                    .name
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                            {Rupiah(
                                                                product.price
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            {Rupiah(
                                                                product.cost_price
                                                            )}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default AddProductPage;
