import React from "react";
import ButtonSidebar from "@/daisyui/ButtonSidebar";
const Sidebar = () => {
    return (
        <div className="bg-fuchsia-950 mt-16 pb-20 w-24 fixed h-screen scrollable overflow-y-scroll">
            <ul className="w-full flex flex-col gap-y-5 py-5">
                <ButtonSidebar
                    href="/"
                    icon="material-symbols:dashboard-outline"
                    text="Dashboard"
                />
                <ButtonSidebar href="/user" icon="ph:user" text="User" />
                <ButtonSidebar
                    href="/product"
                    icon="bytesize:bag"
                    text="Product"
                />
                <ButtonSidebar
                    href="/sales_order"
                    icon="mdi:cart-outline"
                    text="Sales Order"
                />
                <ButtonSidebar
                    href="/list_order"
                    icon="material-symbols:order-approve-outline-sharp"
                    text="List Order"
                />
                <ButtonSidebar icon="raphael:customer" text="Customer" />
                <ButtonSidebar
                    href="/inventory"
                    icon="material-symbols:warehouse-outline"
                    text="Inventory"
                />
                <ButtonSidebar icon="mdi:report-box-outline" text="Report" />
                <ButtonSidebar icon="uil:setting" text="Settings" />
            </ul>
        </div>
    );
};

export default Sidebar;
