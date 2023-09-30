import App from "@/Layouts/App";
import React from "react";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TableListProducts from "./TableListProducts";
import Modal from "./Modal";
const Inventory = (props) => {
    const { inventories, categories, new_stock } = props;
    return (
        <App>
            <Head title="Inventory" />
            <div className="grid grid-cols-3 gap-3 py-5 px-5">
                <div className="col-span-2">
                    <ButtonCategory data={categories} />
                    <TableListProducts data={inventories} />
                </div>
                <div className="bg-white rounded-md p-3">
                    <div className="flex flex-col gap-y-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-semibold text-slate-800">
                                New Grocery Stock
                            </h1>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("addStock")
                                        .showModal()
                                }
                                className="btn btn-outline shadow-md text-fuchsia-800 border-fuchsia-800 hover:bg-fuchsia-800"
                            >
                                <Icon className="w-4 h-4" icon="gala:add" /> Add
                                Stock
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Tanggal</th>
                                        <th>Product Name</th>
                                        <th>Qty In</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {new_stock.map((stock, index) => (
                                        <tr key={index}>
                                            <td>{stock.adjustment_date}</td>
                                            <td>{stock.product.name}</td>
                                            <td>{stock.quantity_change}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </App>
    );
};

const ButtonCategory = ({ data }) => {
    return (
        <div className="flex gap-x-2 overflow-x-auto mb-3">
            {data.map((category, index) => (
                <button key={index} className="btn btn-fuchsia">
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default Inventory;
