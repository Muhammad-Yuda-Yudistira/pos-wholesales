import React, { useState } from "react";
import TextInput from "@/daisyui/TextInput";

const ModalBayar = (props) => {
    const { subtotal } = props;
    const [bayar, setBayar] = useState(0);
    const handleChange = (e) => {
        setBayar(e.target.value);
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
                <div>
                    <TextInput label="Subtotal " value={subtotal} readOnly />
                    <TextInput label="Bayar" onChange={handleChange} />
                    <TextInput label="Kembalian" value={bayar - subtotal} />
                </div>
            </div>
        </dialog>
    );
};

export default ModalBayar;
