import React, { useState } from "react";
import TextInput from "@/daisyui/TextInput";
import { useForm, router } from "@inertiajs/react";
import ModalInvoice from "./ModalInvoice";

const ModalBayar = (props) => {
    const { subtotal, id, customer } = props;
    const [bayar, setBayar] = useState(0);

    const handleChange = (e) => {
        setBayar(e.target.value);
    };
    const pay = (e) => {
        e.preventDefault();
        router.post("/sales_order/pay", {
            subtotal: subtotal,
            sales_id: id,
            customer: customer,
            items: props.items,
        });
        document.getElementById("modalBayar").close();
        setTimeout(() => {
            document.getElementById("modalLoading").close();
            document.getElementById("modalInvoice").showModal();
        }, 2000);
        document.getElementById("modalLoading").showModal();
    };

    return (
        <dialog id="modalBayar" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Pay Now</h3>
                <form>
                    <TextInput
                        label="Subtotal "
                        value={subtotal.toLocaleString("id-ID")}
                        readOnly
                    />
                    <TextInput label="Bayar" onChange={handleChange} />
                    <TextInput
                        label="Kembalian"
                        value={(bayar - subtotal).toLocaleString("id-ID")}
                        readOnly
                    />
                    <button
                        disabled={bayar >= subtotal ? false : true}
                        onClick={pay}
                        className="btn btn-fuchsia w-full mt-3"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default ModalBayar;
