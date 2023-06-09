import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    console.log(error);

    return (
        <div id="error-page" className="flex flex-col min-h-screen justify-center items-center py-10">
            <h1 className="text-5xl font-black text-blue-400">Oops!</h1>
            <Link to={'/'}><button className="rounded-2xl px-10 py-2 border-2 border-sky-600 bg-sky-600 text-white my-5 hover:bg-slate-100 hover:text-sky-600 active:bg-blue-500 active:text-white"><FontAwesomeIcon size="lg" icon={faArrowLeft}/> <span className="text-lg font-bold">Go to Home Page</span> <FontAwesomeIcon icon={faHome}/></button></Link>
            <img className="w-80" src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt="" />
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {error.status && <p className="text-5xl font-black">Error Code: <span className="text-red-600">{error.status}</span></p>}
            {error.data && <p className="text-xl font-bold text-sky-600">{error.data}</p>}
        </div>
    );
}

export default ErrorPage;