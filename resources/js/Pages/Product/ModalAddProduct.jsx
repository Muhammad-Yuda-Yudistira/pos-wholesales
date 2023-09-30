import React, { useState } from "react";
import TextInput from "@/daisyui/TextInput";
import Textarea from "@/daisyui/Textarea";
import SelectInput from "@/daisyui/SelectInput";
import { usePage, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const ModalAddProduct = () => {
    const { category } = usePage().props;
    const { props } = usePage();
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category_id: "",
        description: "",
        price: "",
        cost_price: "",
    });
    const MySwal = withReactContent(Swal);
    function submit(e) {
        e.preventDefault();
        post("/product/store");
        setData({
            name: "",
            category_id: 0,
            description: "",
            price: "",
            cost_price: "",
        });
        document.getElementById("add_product").close();
    }

    return (
        <dialog id="add_product" className="modal">
            <div className="modal-box scrollable">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg text-fuchsia-900">
                    Add New Product
                </h3>
                <form onSubmit={submit}>
                    <div className="py-4">
                        <TextInput
                            label="Product Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 ml-2">
                                {errors.name}
                            </div>
                        )}

                        <SelectInput
                            label="Category"
                            data={category}
                            value={data.category_id}
                            onChange={(e) =>
                                setData("category_id", parseInt(e.target.value))
                            }
                        />
                        {errors.category_id && (
                            <div className="text-red-500 ml-2">
                                {errors.category_id}
                            </div>
                        )}
                        <Textarea
                            label="Description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <div className="text-red-500 ml-2">
                                {errors.description}
                            </div>
                        )}
                        <TextInput
                            label="Price"
                            value={data.price}
                            onChange={(e) =>
                                setData("price", parseFloat(e.target.value))
                            }
                        />
                        {errors.price && (
                            <div className="text-red-500 ml-2">
                                {errors.price}
                            </div>
                        )}
                        <TextInput
                            label="Cost Price"
                            value={data.cost_price}
                            onChange={(e) =>
                                setData(
                                    "cost_price",
                                    parseFloat(e.target.value)
                                )
                            }
                        />
                        {errors.cost_price && (
                            <div className="text-red-500 ml-2">
                                {errors.cost_price}
                            </div>
                        )}
                    </div>
                    <button className="btn w-full  bg-fuchsia-950 hover:bg-fuchsia-800 text-white">
                        Submit
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default ModalAddProduct;
