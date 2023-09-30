import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";

const Customer = (props) => {
    const customers = props.customers.data;
    const links = props.customers.links;
    console.log(props.customers);
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

const Paginate = ({ data, total }) => {
    const newLinks = data.filter((item) => {
        return !isNaN(item.label);
    });
    const PrevNext = data.filter((item) => {
        return isNaN(item.label);
    });
    return (
        <div className="flex justify-between items-center">
            <p className="text-slate-900 text-lg">
                Showing {newLinks.length} of {total}
            </p>
            <div className="join mt-5">
                <Link
                    href={PrevNext[0].url}
                    className="join-item bg-white hover:bg-fuchsia-300 btn"
                >
                    &laquo;
                </Link>
                {newLinks.map((item, index) => (
                    <Link
                        href={item.url}
                        key={index}
                        className={`join-item bg-white hover:bg-fuchsia-300 btn ${
                            item.active ? "bg-fuchsia-500" : ""
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href={PrevNext[1].url}
                    className="join-item bg-white hover:bg-fuchsia-300 btn"
                >
                    &raquo;
                </Link>
            </div>
        </div>
    );
};

export default Customer;
