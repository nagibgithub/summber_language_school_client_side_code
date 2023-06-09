import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavBar = () => {

    const navOption = [
        { title: 'Home', path: '/' },
        { title: 'Log In', path: '/login' },
    ]

    const navBar = navOption.map((nav, index) => <li key={index}><Link to={nav.path}>{nav.title}</Link></li>);

    return (
        <div className="navbar bg-base-100">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBar}
                    </ul>
                </div>
                <Link to={'/'}><img className="w-20" src="/logo.png" alt="Language Logo" /></Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>
            
            <div className="navbar-end">
                <Link to={'login'} className="btn">Log In</Link>
            </div>
            
        </div>
    );
};

export default NavBar;