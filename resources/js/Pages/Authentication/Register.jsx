import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Icon } from "@iconify/react";
import TextInput from "@/daisyui/TextInput";
import { Link } from "@inertiajs/react";
const Register = () => {
    const [type, setType] = useState("password");

    return (
        <AuthLayout>
            <div className="card w-96 bg-white p-5 shadow-md ">
                <h1 className="text-center text-4xl font-bold text-orange-500">
                    Register
                </h1>
                <div className="form-control w-full mb-2">
                    <TextInput type="text" label="Username" />
                </div>
                <div className="form-control w-full mb-2">
                    <TextInput type="email" label="Email" />
                </div>
                <div className="form-control w-full mb-2 relative">
                    <TextInput type="password" label="Password" eye="true" />
                </div>
                <div className="form-control w-full mb-2 relative">
                    <TextInput
                        type="password"
                        label="Confirm Password"
                        eye="true"
                    />
                </div>
                <div className="my-5">
                    <button className="btn btn-active hover:bg-orange-600 bg-orange-500 w-full text-xl font-bold text-slate-950">
                        Register
                    </button>
                </div>
                <Link href="/login" className="text-blue-600 hover:underline">
                    I have already an account!
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Register;
