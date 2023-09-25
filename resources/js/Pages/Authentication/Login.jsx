import React from "react";
import AuthLayout from "./AuthLayout";
import TextInput from "@/daisyui/TextInput";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/login");
    }
    return (
        <AuthLayout>
            <div className="card w-96 bg-white p-5 shadow-md ">
                <form onSubmit={submit}>
                    <h1 className="text-center text-4xl font-bold text-orange-500">
                        Login
                    </h1>
                    <div className="form-control w-full mb-2">
                        <TextInput
                            value={data.username}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                            label="Username"
                        />
                        {errors.username && (
                            <p className="text-red-500 mt-1 ml-3">
                                {errors.username}
                            </p>
                        )}
                    </div>
                    <div className="form-control w-full mb-2 relative">
                        <TextInput
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            label="Password"
                            eye="true"
                        />
                        {errors.password && (
                            <p className="text-red-500 mt-1 ml-3">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="my-5">
                        <button
                            type="submit"
                            className="btn btn-active hover:bg-orange-600 bg-orange-500 w-full text-xl font-bold text-slate-950"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <Link
                    href="/register"
                    className="text-blue-600 hover:underline"
                >
                    Create new account!
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
