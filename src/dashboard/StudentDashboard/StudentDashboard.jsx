import { Helmet } from "react-helmet-async";
import StudentSelectedClasses from "./StudentSelectedClasses";
import StudentEnrolledClass from "./StudentEnrolledClass";
import { useState } from "react";

const StudentDashboard = () => {

    const [activeTab, setActiveTab] = useState(1);



    return (
        <div>
            <Helmet><title>Summer School | Student Dashboard</title></Helmet>
            <div className="tabs flex justify-center">
                <div className={`${activeTab == 1 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(1)}>Selected Classes</div>
                <div className={`${activeTab == 2 ? "tab-active" : ""} tab tab-lg tab-lifted`} onClick={() => setActiveTab(2)}>Enrolled Classes</div>
            </div>
            <div>
                {
                    activeTab == 1 ?
                        <>
                            <StudentSelectedClasses></StudentSelectedClasses>
                        </>
                        :
                        <>
                            <StudentEnrolledClass></StudentEnrolledClass>
                        </>
                }
            </div>
        </div>
    );
};

export default StudentDashboard;