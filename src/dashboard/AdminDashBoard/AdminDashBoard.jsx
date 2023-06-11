import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ManageClasses from "./ManageClasses";
import ManageUsers from "./ManageUsers";

const AdminDashBoard = () => {

    const [activeTab, setActiveTab] = useState(1);


    return (
        <div>
            <Helmet><title>Summer School | Admin Dashboard</title></Helmet>
            {/* lg */}
            <div className="tabs flex justify-center">
                <div className={`${activeTab == 1 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(1)}>Manage Classes</div>
                <div className={`${activeTab == 2 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(2)}>Manage Users</div>
            </div>
            <div>
                {
                    activeTab == 1 ?
                        <>
                            <ManageClasses></ManageClasses>
                        </>
                        :
                        <>
                            <ManageUsers></ManageUsers>
                        </>
                }
            </div>

        </div>
    );
};

export default AdminDashBoard;