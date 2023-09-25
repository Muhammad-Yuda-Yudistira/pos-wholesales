import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TextInput from "@/daisyui/TextInput";
import Textarea from "@/daisyui/Textarea";
import SelectInput from "@/daisyui/SelectInput";
import { usePage, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
            <Modal />
        </App>
    );
};

const Modal = () => {
    const { category } = usePage().props;
    const { props } = usePage();
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category_id: "",
        description: "",
        price: "",
        cost_price: "",
    });
    const MySwal = withReactContent(Swal);
    function submit(e) {
        e.preventDefault();
        post("/product/store");
        setData({
            name: "",
            category_id: 0,
            description: "",
            price: "",
            cost_price: "",
        });
        document.getElementById("add_product").close();
    }

    return (
        <dialog id="add_product" className="modal">
            <div className="modal-box scrollable">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg text-fuchsia-900">
                    Add New Product
                </h3>
                <form onSubmit={submit}>
                    <div className="py-4">
                        <TextInput
                            label="Product Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 ml-2">
                                {errors.name}
                            </div>
                        )}

                        <SelectInput
                            label="Category"
                            data={category}
                            value={data.category_id}
                            onChange={(e) =>
                                setData("category_id", parseInt(e.target.value))
                            }
                        />
                        {errors.category_id && (
                            <div className="text-red-500 ml-2">
                                {errors.category_id}
                            </div>
                        )}
                        <Textarea
                            label="Description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <div className="text-red-500 ml-2">
                                {errors.description}
                            </div>
                        )}
                        <TextInput
                            label="Price"
                            value={data.price}
                            onChange={(e) =>
                                setData("price", parseFloat(e.target.value))
                            }
                        />
                        {errors.price && (
                            <div className="text-red-500 ml-2">
                                {errors.price}
                            </div>
                        )}
                        <TextInput
                            label="Cost Price"
                            value={data.cost_price}
                            onChange={(e) =>
                                setData(
                                    "cost_price",
                                    parseFloat(e.target.value)
                                )
                            }
                        />
                        {errors.cost_price && (
                            <div className="text-red-500 ml-2">
                                {errors.cost_price}
                            </div>
                        )}
                    </div>
                    <button className="btn w-full  bg-fuchsia-950 hover:bg-fuchsia-800 text-white">
                        Submit
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default Product;
