import React from "react";
import App from "@/Layouts/App";
import { Head, usePage } from "@inertiajs/react";
import Paginate from "@/daisyui/Paginate";

const ListOrder = (props) => {
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
            <TableListOrder data={props.list_order.data} />
            <div className="px-5 -mt-7">
                <Paginate
                    data={props.list_order.links}
                    total={props.list_order.total}
                />
            </div>
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
                            <td>
                                <a
                                    className="text-blue-600 hover:underline hover:italic"
                                    target="_blank"
                                    href={"/struk/" + item.invoice}
                                >
                                    {item.invoice}
                                </a>
                            </td>
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
