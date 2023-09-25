import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import InputSearch from "@/daisyui/InputSearch";
import ListCategory from "./ListCategory";
import { usePage, router, Link } from "@inertiajs/react";
import ModalBayar from "./ModalBayar";

const SalesOrder = ({ categories, products, id_sales, response, sales }) => {
    const order_id = id_sales.id_sales;
    const handleClick = (id) => {
        router.post("/sales_order/add_item", {
            orderId: order_id,
            productId: id,
        });
    };

    return (
        <App>
            <Head title="Sales Order" />
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 py-5">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl text-gray-900 leading-tight">
                            Category
                        </h2>
                        <InputSearch />
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
                                    {products.map((product, index) => (
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
                <div className="bg-white rounded-xl my-5">
                    <OrderSummary />
                </div>
            </div>
        </App>
    );
};

const OrderSummary = () => {
    const id = usePage().props.id_sales.id_sales;
    const { sales } = usePage().props;
    const items = sales[0].items;
    const subtotal = items.reduce(
        (acc, item) => acc + parseInt(item.subtotal),
        0
    );
    const generateId = (number) => {
        return String(number).padStart(4, "0");
    };
    const Invoice = `INV/${new Date().getFullYear()}/ ${generateId(id)}`;
    const handleClick = (id) => {
        router.post("/sales_order/cancel", {
            sales_id: id,
        });
    };

    return (
        <>
            <div className="p-3 flex justify-between">
                <h1 className="text-2xl font-semibold text-slate-800">
                    <span className="font-extrabold">Order</span>
                    Summary
                </h1>
                <Link
                    href="/sales_order/new_transaction"
                    method="post"
                    as="button"
                    type="button"
                    className="btn btn-sm btn-outline-fuchsia"
                >
                    New Transaction
                </Link>
            </div>
            {id && (
                <>
                    <div className="px-3 py-2 border-y flex gap-5">
                        <input
                            type="text"
                            value={Invoice}
                            className="input input-sm border border-slate-300 w-36"
                            readOnly
                        />
                    </div>

                    <section
                        id="body"
                        className="overflow-y-scroll scrollable lg:h-64 2xl:h-[355px]"
                    >
                        <div className="px-3">
                            <div className="grid grid-cols-4 bg-fuchsia-50 items-center h-9">
                                <p className="col-span-2">Product</p>
                                <p className="text-center">Qty</p>
                                <p className="text-right">Price</p>
                            </div>
                            <Items data={sales} />
                        </div>
                    </section>
                    <footer className="px-3 py-2">
                        <div className="flex justify-between border-b text-slate-500">
                            <p>SubTotal</p>
                            <p>{subtotal.toLocaleString("id-ID")}</p>
                        </div>
                        <div className="flex justify-between border-b text-slate-500">
                            <p>Discount</p>
                            <p>0</p>
                        </div>
                        <div className="flex justify-between font-bold text-slate-800">
                            <p>Grand Total</p>
                            <p>{(subtotal + 0).toLocaleString("id-ID")}</p>
                        </div>
                        <div className="flex justify-between gap-x-3 mt-3 pr-3">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("modalBayar")
                                        .showModal()
                                }
                                className="btn btn-fuchsia w-1/2"
                            >
                                Pay Now
                            </button>
                            <button
                                onClick={() => handleClick(id)}
                                className="btn btn-orange w-1/2"
                            >
                                Cancel Order
                            </button>
                        </div>
                        <ModalBayar subtotal={subtotal} />
                    </footer>
                </>
            )}
        </>
    );
};

const Items = (sales) => {
    const data = sales.data[0].items;

    const counterPlus = (id) => {
        router.post("/sales_order/counter_plus", {
            item_id: id,
        });
    };
    const counterMinus = (id) => {
        router.post("/sales_order/counter_minus", {
            item_id: id,
        });
    };

    return (
        <>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-4 border-b mt-2 py-1"
                >
                    <p className="col-span-2">{item.product.name}</p>
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                counterMinus(item.id);
                            }}
                            className="btn btn-xs btn-outline-fuchsia"
                        >
                            -
                        </button>
                        <p className="px-2">{item.quantity}</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                counterPlus(item.id);
                            }}
                            className="btn btn-xs btn-outline-fuchsia"
                        >
                            +
                        </button>
                    </div>
                    <p className="text-right">
                        {parseInt(item.subtotal).toLocaleString("id-ID")}
                    </p>
                </div>
            ))}
        </>
    );
};

export default SalesOrder;
