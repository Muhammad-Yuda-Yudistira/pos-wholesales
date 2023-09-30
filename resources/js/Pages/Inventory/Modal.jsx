import React from "react";
import TextInput from "@/daisyui/TextInput";
import SelectInput from "@/daisyui/SelectInput";
import Textarea from "@/daisyui/Textarea";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
const Modal = () => {
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

export default Modal;
