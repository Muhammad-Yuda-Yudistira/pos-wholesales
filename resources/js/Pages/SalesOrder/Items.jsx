import React from "react";
import { router } from "@inertiajs/react";

const Items = ({ data }) => {
    const plus = (order_id, product_Id) => {
        router.post("/sales_order/counter_plus", {
            order_id: order_id,
            product_id: product_Id,
        });
    };
    const minus = (order_id, product_id) => {
        router.post("/sales_order/counter_minus", {
            order_id: order_id,
            product_id: product_id,
        });
    };
    return (
        <div className="border-b pb-1">
            <p className="first-letter:uppercase text-lg text-slate-500">
                {data.product.name}
            </p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            minus(data.id, data.product_id);
                        }}
                        className="btn btn-xs btn-outline-fuchsia"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={data.quantity}
                        className="w-14 h-7 text-center rounded-full border-fuchsia-950"
                        readOnly
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            plus(data.id, data.product_id);
                        }}
                        className="btn btn-xs btn-outline-fuchsia"
                    >
                        +
                    </button>
                </div>
                <p>{parseFloat(data.subtotal).toLocaleString("id-ID")}</p>
            </div>
        </div>
    );
};

export default Items;
