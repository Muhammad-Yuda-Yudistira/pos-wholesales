const Rupiah = (price) => {
    const nominal = price;
    const formattedPrice = parseInt(nominal).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    return formattedPrice;
};


export { Rupiah };