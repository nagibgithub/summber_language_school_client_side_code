import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const GoogleButton = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // console.log(location);

    const { auth } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const googleHandler = () => signInWithPopup(auth, googleProvider).then((res) => {
        const loggegUser = { name: res.user.displayName, email: res.user.email, img: res.user.photoURL };
        fetch('https://b712-summer-camp-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loggegUser)
        }).then(res => res.json).catch(error => console.log(error));
        navigate(from, { replace: true })
    }).catch(error => console.log(error));





    return (
        <button
            onClick={googleHandler}
            className="google-signin-btn"
        >

            <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
            <h1 className="pl-2 text-lg">Log in with Google</h1>
        </button>
    );
};

export default GoogleButton;