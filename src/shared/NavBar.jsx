import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {

    const { setTheme, theme } = useContext(ThemeContext);
    const handleDayNight = () => {
        setTheme(!theme);
    };

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Log Out",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
            }
        })
    }

    const navOption = [
        { title: 'Home', path: '/' },
        { title: 'Instructors', path: '/instructors' },
        { title: 'Classes', path: '/classes' }
    ];

    const dashBoardOption = <li><NavLink to={'/dashboard'} className={({ isActive, isPending }) => isActive ? `navActive ${theme ? "border-white" : "border-[#1F3865]"}` : isPending ? `navPending ${theme ? "border-[#aaaaaa]" : "border-white"}` : `navInActive ${theme ? "border-[#1F3865]" : "border-white"}`}>Dashboard</NavLink></li>
    const navBar = <>{navOption.map((nav, index) => <li key={index}><NavLink to={nav.path} className={({ isActive, isPending }) => isActive ? `navActive ${theme ? "border-white" : "border-[#1F3865]"}` : isPending ? `navPending ${theme ? "border-[#aaaaaa]" : "border-white"}` : `navInActive ${theme ? "border-[#1F3865]" : "border-white"}`}>{nav.title}</NavLink></li>)}{user && dashBoardOption}</>;

    return (
        <div className="navbar" style={theme ? { backgroundColor: "#1F3865", color: "white" } : { backgroundColor: "white", color: "#1F3865" }}>

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm z-40 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBar}
                    </ul>
                </div>
                <Link to={'/'}><img className="w-20" src="/logo.png" alt="Language Logo" /></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex">
                    {navBar}
                </ul>
            </div>

            <div className="navbar-end flex items-center">

                <button onClick={handleDayNight} className="btn btn-circle"><FontAwesomeIcon icon={theme ? faSun : faMoon} /></button>
                {
                    user ?
                        <>
                            <img className="w-16 mask mask-circle" src={user.photoURL} alt="user" />
                            <button className="btn" onClick={handleLogOut}>Log Out</button>
                        </>
                        :
                        <Link to={'login'} className="btn">Log In</Link>
                }
            </div>

        </div>
    );
};

export default NavBar;