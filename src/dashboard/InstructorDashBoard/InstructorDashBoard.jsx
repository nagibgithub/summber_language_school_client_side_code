import { useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorMyClass from "./InstructorMyClass";
import InstructorAddClass from "./InstructorAddClass";

const InstructorDashBoard = () => {
    const [activeTab, setActiveTab] = useState(1);





    return (
        <div>
            <Helmet><title>Summer School | Instructor Dashboard</title></Helmet>
            {/* lg */}
            <div className="tabs flex justify-center">
                <div className={`${activeTab == 1 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(1)}>My Classes</div>
                <div className={`${activeTab == 2 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(2)}>Add A Class</div>
            </div>
            <div>
                {
                    activeTab == 1 ?
                        <>
                            <InstructorMyClass></InstructorMyClass>
                        </>
                        :
                        <>
                            <InstructorAddClass></InstructorAddClass>
                        </>
                }
            </div>
        </div>
    );
};

export default InstructorDashBoard;