import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
const SettingPage = () => {
    const [data, setData] = useState({
        company_name: "",
        owner_name: "",
        company_address: {
            jl: "",
            city: "",
            province: "",
            country: "",
        },
        phone: {
            phone_dua: "",
            phone_satu: "",
        },
    });
    fetch("https://urilll-pos-default-rtdb.firebaseio.com/company.json")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    return (
        <App>
            <Head title="Setting" />
            <div className="p-5 flex">
                <Icon className="text-9xl" icon="mdi:company" />
                <div className="overflow-x-auto">
                    <table className="table text-slate-900">
                        <tbody>
                            <tr>
                                <td>Company</td>
                                <td className="uppercase">
                                    {data.company_name}
                                </td>
                            </tr>
                            <tr>
                                <td>Owner</td>
                                <td className="uppercase">{data.owner_name}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td className="uppercase">
                                    {data.phone.phone_satu} /{" "}
                                    {data.phone.phone_dua}
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="pl-6">* JL</td>
                                <td className="uppercase">
                                    {data.company_address.jl}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* Kode POS</td>
                                <td className="uppercase">
                                    {data.company_address.kode_pos}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* Kp</td>
                                <td className="uppercase">
                                    {data.company_address.kp}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* RT/RW</td>
                                <td className="uppercase">
                                    {data.company_address.rtrw}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* DESA</td>
                                <td className="uppercase">
                                    {data.company_address.desa}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* KECAMATAN</td>
                                <td className="uppercase">
                                    {data.company_address.kecamatan}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* KABUPATEN</td>
                                <td className="uppercase">
                                    {data.company_address.kabupaten}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-6">* PROVINSI</td>
                                <td className="uppercase">
                                    {data.company_address.provinsi}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    );
};

export default SettingPage;
