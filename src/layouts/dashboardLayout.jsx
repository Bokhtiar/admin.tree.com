import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
    return (
        <section>
            <p>header</p>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3">sidebar</div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                    <Outlet />
                </div>
            </div>
            footer
        </section>
    )
}