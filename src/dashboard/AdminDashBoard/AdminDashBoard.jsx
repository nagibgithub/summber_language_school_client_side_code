import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AdminDashBoard = () => {

    const [activeTab, setActiveTab] = useState(1);


    return (
        <div>
            <Helmet><title>Summer School | Admin Dashboard</title></Helmet>
            {/* lg */}
            <div className="tabs flex justify-center">
                <a className={`${activeTab == 1 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(1)}>Large</a>
                <a className={`${activeTab == 2 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(2)}>Large</a>
            </div>
        </div>
    );
};

export default AdminDashBoard;