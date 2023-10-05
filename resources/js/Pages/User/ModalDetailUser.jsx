import React from "react";

const ModalDetailUser = ({ data }) => {
    console.log(data);
    return (
        <dialog id="modalDetail" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Details Employee</h3>
                <div className="w-2/3 border">
                    <div className="grid grid-cols-2 py-2 border-b">
                        <p>FullName</p>
                        <p>
                            {data.employee?.first_name +
                                " " +
                                data.employee?.last_name}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b">
                        <p>Username</p>
                        <p>{data.username}</p>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b">
                        <p>Email</p>
                        <p>{data.email}</p>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b">
                        <p>Phone</p>
                        <p>{data.employee.phone}</p>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b">
                        <p>Role User</p>
                        <p>{data.role}</p>
                    </div>
                    <div className="grid grid-cols-2 py-2 ">
                        <p>Position</p>
                        <p>{data.employee.position}</p>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default ModalDetailUser;
