import "./MainLayout.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <div className="main-layout-wrapper">
                <Navbar />
                <div className="main-content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;