import App from "@/Layouts/App";
import React from "react";
import TextInput from "@/daisyui/TextInput";
import SelectInput from "@/daisyui/SelectInput";
import Textarea from "@/daisyui/Textarea";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const Inventory = (props) => {
    const { inventories, categories, new_stock } = props;
    return (
        <App>
            <Head title="Inventory" />
            <div className="grid grid-cols-3 gap-3 py-5 pr-5">
                <div className="col-span-2">
                    <ButtonCategory data={categories} />
                    <InventoryProductTable data={inventories} />
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

const InventoryProductTable = ({ data }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-2xl font-semibold text-slate-900">
                    Inventory
                </h1>
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered border-fuchsia-200 focus:border-fuchsia-700"
                        />
                        <button className="btn btn-square btn-fuchsia">
                            <Icon
                                className="w-6 h-6 "
                                icon="material-symbols:search"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded-md">
                <table className="table">
                    <thead>
                        <tr className="bg-fuchsia-900 text-orange-500">
                            <th></th>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Quantity In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((inventory, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{inventory.product.name}</td>
                                <td>{inventory.product.category.name}</td>
                                <td className="text-center">
                                    {inventory.quantity_in_stock}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
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

const Modal = () => {
    const response = usePage().props;
    console.log(response);
    const { products } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        product_id: "",
        adjustment_date: "",
        reason: "",
        quantity_change: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/inventory/store");
        setData({
            product_id: "",
            adjustment_date: "",
            reason: "",
            quantity_change: "",
        });
        document.getElementById("addStock").close();
    }
    return (
        <dialog id="addStock" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Add new stock</h3>
                <form onSubmit={submit} className="py-4">
                    <TextInput
                        type="date"
                        label="Tanggal"
                        value={data.adjustment_date}
                        onChange={(e) =>
                            setData("adjustment_date", e.target.value)
                        }
                    />
                    <SelectInput
                        label="Product Name"
                        data={products}
                        value={data.product_id}
                        onChange={(e) =>
                            setData("product_id", parseInt(e.target.value))
                        }
                    />
                    <TextInput
                        label="Quantity"
                        value={data.quantity_change}
                        onChange={(e) =>
                            setData("quantity_change", parseInt(e.target.value))
                        }
                    />
                    <Textarea
                        label="Reason"
                        value={data.reason}
                        onChange={(e) => setData("reason", e.target.value)}
                    />
                    <div className="mt-3 grid grid-cols-2 gap-x-2">
                        <button className="btn btn-fuchsia">Submit</button>
                        <button
                            className="btn btn-orange"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("addStock").close();
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default Inventory;
