import React, { useState } from "react";
import { Icon } from "@iconify/react";

const TableListProducts = ({ data }) => {
    const [newData, setNewData] = useState(data);
    const handleChange = (e) => {
        const keyword = e.target.value.toLowerCase();
        const newData = data.filter((product) => {
            return product.product.name.toLowerCase().includes(keyword);
        });
        setNewData(newData);
    };
    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-2xl font-semibold text-slate-900">
                    Inventory
                </h1>
                <div className="form-control">
                    <div className="input-group">
                        <input
                            onChange={(e) => handleChange(e)}
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
                        {newData.map((inventory, index) => (
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

export default TableListProducts;
