import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import Paginate from "@/daisyui/Paginate";

const Customer = (props) => {
    const customers = props.customers.data;
    const links = props.customers.links;
    return (
        <App>
            <Head title="Customer" />
            <div className="p-5">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold text-slate-900">
                        Customer
                    </h1>
                    <input
                        type="text"
                        placeholder="Search"
                        className="input w-full max-w-xs"
                    />
                </div>
                <div>
                    <TableCustomer data={customers} />
                    <Paginate data={links} total={props.customers.total} />
                </div>
            </div>
        </App>
    );
};

const TableCustomer = ({ data }) => {
    return (
        <div className="overflow-x-auto bg-white mt-5 rounded shadow-sm">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customer;
