import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import App from "@/Layouts/App";
import TextInput from "@/daisyui/TextInput";

const FormUpdateUser = ({ user }) => {
    console.log(user);
    const { data, setData, post, processing, errors } = useForm({
        user_id: user.id,
        first_name: "",
        last_name: "",
        position: "",
        phone: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/user/update");
        console.log(data);
    };
    return (
        <App>
            <Head title="Update User Profile" />
            <div className="max-w-xl  m-5 rounded-md p-5">
                <h1 className="text-3xl font-semibold text-slate-900">
                    Update User Profile
                </h1>
                <form onSubmit={submit} className="mt-4">
                    <TextInput
                        label="Username"
                        value={user.username}
                        disabled
                    />
                    <div className="grid grid-cols-2 gap-x-2">
                        <div>
                            <TextInput
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                label="First Name"
                            />
                            {errors.first_name && (
                                <div>{errors.first_name}</div>
                            )}
                        </div>
                        <div>
                            <TextInput
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                label="Last Name"
                            />
                            {errors.last_name && <div>{errors.last_name}</div>}
                        </div>
                    </div>
                    <TextInput
                        value={data.position}
                        onChange={(e) => setData("position", e.target.value)}
                        label="Position"
                    />
                    {errors.position && <div>{errors.position}</div>}
                    <TextInput
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        label="Phone"
                    />
                    {errors.phone && <div>{errors.phone}</div>}
                    <div className="grid grid-cols-2 mt-3 gap-x-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-fuchsia"
                        >
                            Update
                        </button>
                        <Link href="/user" className="btn  btn-orange">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </App>
    );
};

export default FormUpdateUser;
