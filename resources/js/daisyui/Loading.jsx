import React from "react";

const Loading = () => {
    return (
        <dialog id="modalLoading" className="modal">
            <div className="modal-box w-60">
                <div className="flex items-center justify-center">
                    <p className="text-2xl mr-3">Please Wait</p>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            </div>
        </dialog>
    );
};

export default Loading;
