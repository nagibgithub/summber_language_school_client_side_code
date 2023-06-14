
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login_register/Login/Login";
import Register from "../pages/login_register/Register/Register";
import ErrorPage from "../error-page";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../dashboard/DashBoard/DashBoard";
import ClassFeedback from "../dashboard/AdminDashBoard/ClassFeedback";
import InstructorClassUpdate from "../dashboard/InstructorDashBoard/InstructorClassUpdate";
import PrivateRoute from "./PrivateRoute";
import Payment from "../dashboard/StudentDashboard/payment/payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/instructors", element: <Instructors /> },
            { path: "/classes", element: <Classes /> },
            { path: "/payment", element: <PrivateRoute><Payment /></PrivateRoute> },
            { path: "/classes/:id", element: <ClassFeedback /> },
            { path: "/classes/update/:id", element: <InstructorClassUpdate />, loader: ({ params }) => fetch(`https://b712-summer-camp-server-side.vercel.app/class/update/${params.id}`) },
            { path: "/dashboard", element: <PrivateRoute><DashBoard /></PrivateRoute> },
        ]
    },
]);

export default router;