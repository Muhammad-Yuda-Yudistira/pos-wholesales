import React from "react";
import { usePage } from "@inertiajs/react";

function Invoice() {
    const { props } = usePage();
    const { id_sales } = props;

    const generateId = (number) => {
        return String(number).padStart(4, "0");
    };

    const Invoice = `INV/${new Date().getFullYear()}/${generateId(
        id_sales.id
    )}`;

    return Invoice;
}

export default Invoice;
