import React from "react";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import "../../../css/main.css";
const Invoice = (props) => {
    console.log(props.invoice);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(props.invoice.order_date).toLocaleDateString(
        "id-ID",
        options
    );
    const subtotal = props.invoice.items.reduce(
        (a, b) => a + parseFloat(b.subtotal),
        0
    );
    return (
        <div className="w-[21cm] mx-auto">
            <Head title="Invoice" />
            <div className="flex justify-end gap-x-2 print">
                <button
                    onClick={() => window.print()}
                    className="btn btn-orange uppercase"
                >
                    <Icon
                        icon="material-symbols:download-rounded"
                        className="text-xl"
                    />
                    Invoice PDF
                </button>
                <button className="btn btn-fuchsia uppercase">
                    <Icon icon="material-symbols:print" className="text-xl" />
                    Print
                </button>
            </div>
            <div className="w-[21cm]  mt-2 bg-white mx-auto p-[1cm]">
                <header className="flex justify-between">
                    <h1 className="font-extrabold text-6xl text-fuchsia-900">
                        Budiman
                    </h1>
                    <div className="text-right">
                        <h1 className="font-semibold tracking-widest text-slate-800 text-xl">
                            INVOICE
                        </h1>
                        <p className="text-fuchsia-900 cursor-pointer">
                            {props.invoice.invoice}
                        </p>
                    </div>
                </header>
                <div className="grid grid-cols-2 mt-5">
                    <div>
                        <h1 className="font-semibold">DITERBITKAN ATAS NAMA</h1>
                        <div className="flex gap-x-8">
                            <p>Kasir</p>
                            <p className="font-medium capitalize">
                                : {props.auth.user.username}
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold">UNTUK</h1>
                        <div className="grid grid-cols-3">
                            <p>Customer</p>
                            <p className="font-medium col-span-2">
                                : {props.invoice.customer.first_name}
                            </p>
                            <p>Tanggal </p>
                            <p className="font-medium col-span-2">
                                : {formattedDate}
                            </p>
                            <p>Metode Bayar </p>
                            <p className="font-medium col-span-2">: Cash</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 border-y-[3px] border-slate-600 py-3 mt-10 font-semibold">
                    <p className="col-span-2">INFO PRODUK</p>
                    <p>JUMLAH</p>
                    <p className="text-right mr-5">HARGA</p>
                    <p className="text-right mr-5">SUBTOTAL</p>
                </div>
                <Item data={props.invoice.items} />
                <div className="flex justify-end w-full">
                    <div className="w-1/2 grid grid-cols-2 gap-y-2 mt-1">
                        <p>Subtotal</p>
                        <p className="text-right mr-5">
                            {subtotal.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                        </p>
                        <p>Diskon</p>
                        <p className="text-right mr-5">o</p>
                        <p>Total Bayar</p>
                        <p className="text-right mr-5 font-semibold">
                            {parseFloat(
                                props.invoice.total_amount
                            ).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                        </p>
                    </div>
                </div>
                <div className="divider mt-10"></div>
                <p className="text-xs -mt-5">
                    Invoice ini sah dan diproses oleh komputer Silakan hubungi
                    <span className="text-blue-600 italic">
                        {" "}
                        0821-1793-3481{" "}
                    </span>
                    apabila kamu membutuhkan bantuan.
                </p>
            </div>
        </div>
    );
};

const Item = ({ data }) => {
    console.log(data);
    return (
        <>
            {data.map((item) => (
                <div className="grid grid-cols-5 py-2 border-b">
                    <p className="col-span-2 text-left">{item.product.name}</p>
                    <p className="text-center">{item.quantity}</p>
                    <p className="text-right mr-5">
                        {parseFloat(item.product.price).toLocaleString("id-ID")}
                    </p>
                    <p className="text-right mr-5">
                        {parseFloat(item.subtotal).toLocaleString("id-ID")}
                    </p>
                </div>
            ))}
        </>
    );
};

export default Invoice;
