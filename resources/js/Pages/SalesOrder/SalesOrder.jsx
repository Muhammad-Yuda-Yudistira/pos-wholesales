import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import InputSearch from "@/daisyui/InputSearch";
import ListCategory from "./ListCategory";
import OrderSummary from "./OrderSummary";
import { usePage, router, Link } from "@inertiajs/react";

const SalesOrder = ({ products, id_sales }) => {
    const order_id = id_sales.id_sales;
    const [newProduct, setNewProduct] = useState(products);
    const handleClick = (id) => {
        router.post("/sales_order/add_item", {
            orderId: order_id,
            productId: id,
        });
    };

    const handleChange = (e) => {
        const keyword = e.target.value.toLowerCase();
        const newData = products.filter((product) => {
            return product.name.toLowerCase().includes(keyword);
        });
        setNewProduct(newData);
    };
    return (
        <App>
            <Head title="Sales Order" />
            <div className="grid grid-cols-3 gap-5 ml-5">
                <div className="col-span-2 py-5">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl text-gray-900 leading-tight">
                            Category
                        </h2>
                        <InputSearch onChange={handleChange} />
                    </div>
                    <ListCategory />
                    <div className="pt-5  flex flex-col gap-y-3 lg:max-h-[396px] 2xl:max-h-[493px] overflow-y-scroll scrollable">
                        <div className="overflow-x-auto scrollable bg-white">
                            <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newProduct.map((product, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>
                                                {parseInt(
                                                    product.price
                                                ).toLocaleString("id-ID")}
                                            </td>
                                            <td>
                                                {
                                                    product.inventory
                                                        .quantity_in_stock
                                                }
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleClick(product.id)
                                                    }
                                                    className="btn btn-xs btn-fuchsia"
                                                >
                                                    order
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <OrderSummary />
            </div>
        </App>
    );
};

export default SalesOrder;
