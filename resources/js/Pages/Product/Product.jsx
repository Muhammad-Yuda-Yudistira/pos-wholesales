import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import ModalAddProduct from "./ModalAddProduct";
const Product = ({ product }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = () => {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        const filteredProducts = product.filter((product) =>
            product.name.toLowerCase().includes(lowerCaseKeyword)
        );
        setFilteredProducts(filteredProducts);
    };

    const keyPress = (e) => {
        if (e.key === "Enter") {
            const filteredProducts = product.filter((product) =>
                product.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            );
            setFilteredProducts(filteredProducts);
        }
    };

    return (
        <App>
            <Head title="Product" />
            <div className="m-5 flex gap-x-7">
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered border-fuchsia-200 focus:border-fuchsia-700"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyPress={keyPress}
                        />
                        <button
                            className="btn btn-square btn-fuchsia"
                            onClick={handleSearch}
                        >
                            <Icon
                                className="w-6 h-6 "
                                icon="material-symbols:search"
                            />
                        </button>
                    </div>
                </div>
                <button
                    onClick={() =>
                        document.getElementById("add_product").showModal()
                    }
                    className="btn btn-fuchsia"
                >
                    Add New Product
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg  m-5">
                <table className="table">
                    <thead>
                        <tr className="bg-fuchsia-900 text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.length > 0
                            ? filteredProducts.map((product, index) => (
                                  <tr
                                      key={index}
                                      className="hover:bg-fuchsia-100"
                                  >
                                      <th>{index + 1}</th>
                                      <td>{product.name}</td>
                                      <td>{product.category.name}</td>
                                      <td>{product.price}</td>
                                  </tr>
                              ))
                            : product.map((product, index) => (
                                  <tr
                                      key={index}
                                      className="hover:bg-fuchsia-100"
                                  >
                                      <th>{index + 1}</th>
                                      <td>{product.name}</td>
                                      <td>{product.category.name}</td>
                                      <td>{product.price}</td>
                                  </tr>
                              ))}
                    </tbody>
                </table>
            </div>
            <ModalAddProduct />
        </App>
    );
};

export default Product;
