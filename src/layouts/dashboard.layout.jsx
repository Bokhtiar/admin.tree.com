import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../components/dashboardNavbar";
import { DashboardSidebar } from "../components/DashboardSidebar";

export const DashboardLayout = () => {
    return (
        <>
            <DashboardNavbar />
            <section className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 my-5">
                    <DashboardSidebar />
                    <div className=" col-span-4">
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
};
