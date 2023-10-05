import React from "react";

const Struk = (props) => {
    const data = props.invoice;
    const subtotal = data.items.reduce((a, b) => a + parseFloat(b.subtotal), 0);
    const createdAt = data.created_at;
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }
    const formattedDate = formatDate(createdAt);
    return (
        <div className="w-[7.8cm] bg-white h-full mx-auto mt-5 shadow-md pt-5 pb-10 font-struk px-3">
            <div className="header leading-none">
                <h1 className="text-center">BUDIMART MANONJAYA</h1>
                <h1 className="text-center">JL.MANONJAYA BLOK KAUM KIDUL</h1>
                <h1 className="text-center">KABUPATEN TASIKMALAYA</h1>
            </div>
            <div className="header_informasi flex justify-between">
                <h1>Bon: {data.invoice}</h1>
                <h1>Kasir: {props.auth.user.username}</h1>
            </div>
            <div className="border-y border-dashed border-gray-600 py-[.5px] mb-1"></div>
            <div className="list_item border-b border-dashed border-gray-600 pb-1">
                {data.items.map((item) => (
                    <Item item={item} />
                ))}
            </div>
            <div className="total leading-none grid grid-cols-2 py-1 border-b border-dashed border-gray-600">
                <p>Subtotal</p>
                <p className="text-right">{subtotal.toLocaleString("id-ID")}</p>
                <p>Diskon</p>
                <p className="text-right">0</p>
                <p>Grand Total</p>
                <p className="text-right">
                    {parseFloat(data.total_amount).toLocaleString("id-ID")}
                </p>
            </div>
            <div className="leading-none grid grid-cols-2 mt-1">
                <p>Tanggal</p>
                <p className="text-right">{formattedDate}</p>
                <p>Pelanggan</p>
                <p className="text-right">
                    {data.customer.first_name === "unregistered"
                        ? "N/A"
                        : data.customer.first_name}
                </p>
            </div>
            <div className="border-y border-dashed border-gray-600 py-[.5px]"></div>
            <div className="text-center leading-none">
                <p>Terima Kasih Atas Kunjungan Anda</p>
                <p>Customer Care</p>
                <p>082117933481/082117933481</p>
            </div>
        </div>
    );
};

const Item = ({ item }) => {
    return (
        <div className="leading-none grid grid-cols-8">
            <p className="col-span-3 wrapper">{item.product.name}</p>
            <p className="text-center">{item.quantity}</p>
            <p className="text-right col-span-2">
                {parseFloat(item.product.price).toLocaleString("id-ID")}
            </p>
            <p className="text-right col-span-2">
                {parseFloat(item.subtotal).toLocaleString("id-ID")}
            </p>
        </div>
    );
};

export default Struk;
