import React from "react";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";

const ModalInvoice = () => {
    const data = usePage().props.response.response;
    return (
        <dialog id="modalInvoice" className="modal">
            <div className="modal-box p-0 scrollable">
                <div className="">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle text-gray-200 btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <div className="h-10 bg-fuchsia-900"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#701a75"
                            fillOpacity="1"
                            d="M0,192L120,208C240,224,480,256,720,256C960,256,1200,224,1320,208L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        ></path>
                    </svg>
                    <div className="flex justify-center absolute top-28 w-full">
                        <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full border">
                            <Icon
                                icon="mdi:invoice-outline"
                                className="text-4xl text-fuchsia-950"
                            />
                        </div>
                    </div>
                </div>
                <div className="border -mt-3 mb-16"></div>
                <div className="px-5">
                    <h1 className="text-center text-2xl font-semibold">
                        Invoice PointOfSales
                    </h1>
                    <h4 className="text-center text-md font-medium text-gray-500">
                        #{data != null && data.invoice}
                    </h4>
                    <div className="grid grid-cols-3 my-7">
                        <div>
                            <p className="uppercase font-medium text-gray-400">
                                Amount paid
                            </p>
                            <p className="text-gray-900 font-medium">
                                Rp{" "}
                                {data != null &&
                                    data.subtotal.toLocaleString("id-ID")}
                            </p>
                        </div>
                        <div>
                            <p className="uppercase font-medium text-gray-400">
                                Date Paid
                            </p>
                            <p className="text-gray-900 font-medium">
                                {data != null &&
                                    new Date(data.date).toLocaleString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        }
                                    )}
                            </p>
                        </div>
                        <div>
                            <p className="uppercase font-medium text-gray-400">
                                Payment Method
                            </p>
                            <p className="text-gray-900 font-medium">Cash</p>
                        </div>
                    </div>
                    <h1 className="text-xl font-semibold uppercase">Summary</h1>
                    <div className="w-full border rounded-md my-3">
                        <div className="flex justify-between p-3">
                            <p>Subtotal</p>
                            <p>
                                {data != null &&
                                    data.subtotal.toLocaleString("id-ID")}
                            </p>
                        </div>
                        <div className="flex justify-between p-3 border-y">
                            <p>Discount</p>
                            <p>0</p>
                        </div>
                        <div className="flex justify-between font-semibold text-gray-800 bg-gray-100 p-3">
                            <p>Amount Paid</p>
                            <p>
                                {data != null &&
                                    data.subtotal.toLocaleString("id-ID")}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-x-2 mb-10">
                        {data != null && (
                            <a
                                target="_blank"
                                href={"/invoice/" + data.invoice}
                                className="btn btn-orange uppercase"
                            >
                                <Icon
                                    icon="material-symbols:download-rounded"
                                    className="text-xl"
                                />
                                Invoice PDF
                            </a>
                        )}

                        <button className="btn btn-outline-fuchsia uppercase">
                            <Icon
                                icon="material-symbols:print"
                                className="text-xl"
                            />
                            Print
                        </button>
                    </div>
                    <p className="mb-5">
                        If you have any questions, Please contact us at{" "}
                        <span className="text-blue-600">0821 1793 3481</span>
                    </p>
                </div>
            </div>
        </dialog>
    );
};

export default ModalInvoice;
