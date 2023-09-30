import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import Items from "./Items";
import ModalBayar from "./ModalBayar";
import ModalInvoice from "./ModalInvoice";
import Loading from "@/daisyui/Loading";
const OrderSummary = () => {
    const { props } = usePage();
    const sales = props.sales;
    const errors = props.errors;
    const [customer, setCustomer] = useState("");
    const newSubtotal =
        sales?.[0]?.items?.reduce((a, b) => a + parseInt(b.subtotal), 0) || 0;
    const [show, setShow] = useState(false);
    const handleCancel = () => {
        router.post("/sales_order/cancel", {
            sales_id: sales[0].id,
        });
    };
    return (
        <div className="bg-white rounded-xl my-5">
            <div className="flex justify-between h-14 items-center px-5">
                <h1 className="text-2xl text-slate-700">
                    <span className="font-bold">Order</span> Summary
                </h1>
                <Link
                    onClick={() => {
                        setShow(true);
                    }}
                    href="/sales_order/new_transaction"
                    method="post"
                    as="button"
                    type="button"
                    className="btn btn-sm btn-outline-fuchsia"
                >
                    New Transaction
                </Link>
            </div>
            {show && (
                <div className="border-y-2 border-dashed  h-14 flex items-center px-5">
                    <input
                        type="text"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        placeholder="Customer"
                        className="focus:border-none border-fuchsia-900 focus:outline-none rounded w-44"
                    />
                </div>
            )}
            <div className="px-5 py-1 h-[260px] overflow-y-auto scrollable">
                <p className="text-red-500">{errors.length > 0 && errors}</p>
                {sales &&
                    sales.length > 0 &&
                    sales[0].items.map((item, index) => (
                        <Items key={index} data={item} />
                    ))}
            </div>
            {show && (
                <div className="px-5 py-1">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{newSubtotal.toLocaleString("id-ID")}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Diskon</p>
                        <p>0</p>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <p>GrandTotal</p>
                        <p>{newSubtotal.toLocaleString("id-ID")}</p>
                    </div>
                    <div className="flex justify-between gap-x-2 font-semibold mt-2">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("modalBayar")
                                    .showModal()
                            }
                            className=" btn w-1/2 btn-fuchsia"
                        >
                            Pay Now
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleCancel();
                            }}
                            className=" btn w-1/2 btn-orange"
                        >
                            Cancel Order
                        </button>
                    </div>
                </div>
            )}
            {sales && sales.length > 0 && (
                <ModalBayar
                    subtotal={newSubtotal}
                    id={sales[0].id}
                    customer={customer}
                    items={sales[0].items}
                />
            )}
            <Loading />
            <ModalInvoice />
        </div>
    );
};

export default OrderSummary;
