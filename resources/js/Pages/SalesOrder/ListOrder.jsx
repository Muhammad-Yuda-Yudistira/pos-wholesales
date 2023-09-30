import React from "react";
import App from "@/Layouts/App";
import { Head, usePage } from "@inertiajs/react";

const ListOrder = (props) => {
    console.log(props.list_order);
    return (
        <App>
            <Head title="List Order" />
            <div className="flex justify-between px-5 mt-5 items-center">
                <h1 className="text-3xl font-semibold text-slate-900">
                    List Order
                </h1>
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <TableListOrder data={props.list_order} />
        </App>
    );
};

const TableListOrder = ({ data }) => {
    return (
        <div className="overflow-x-auto m-5 bg-white rounded shadow-md">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Order Date</th>
                        <th>Invoice</th>
                        <th>Customer</th>
                        <th>Total Amount</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.order_date}</td>
                            <td>{item.invoice}</td>
                            <td>{item.customer_id}</td>
                            <td>
                                {parseFloat(item.total_amount).toLocaleString(
                                    "id-ID"
                                )}
                            </td>
                            <td>{item.payment_status}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListOrder;
