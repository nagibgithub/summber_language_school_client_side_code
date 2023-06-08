
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login_register/Login";
import Register from "../pages/login_register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    },
]);

export default router;