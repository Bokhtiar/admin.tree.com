import { Outlet } from "react-router-dom";
import { Header } from "./partial/header";
import { Sidebar } from "./partial/sidebar/index.jsx";
import { Footer } from "./partial/footer";

export const DashboardLayout = () => {
    return (
        <section>
            <Header/>
            <div className="row" style={{ margin:'0px', padding:'0px', outline:'0px' }}>
                <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                    <Outlet></Outlet>
                </div>
            </div>
           <Footer></Footer>
        </section>
    )
}