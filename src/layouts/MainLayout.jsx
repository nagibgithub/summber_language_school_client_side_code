import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen justify-between flex flex-col container mx-auto">
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;