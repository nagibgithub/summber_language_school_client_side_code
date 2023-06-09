import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GoogleButton from "../socialLoginButton/GoogleButton";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = event => setShowPassword(event.target.checked);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <Helmet>
                <title>Summer School | Log In</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content grid md:grid-cols-2 justify-center">
                        <div className="text-center lg:text-left ml-10">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="max-w-sm w-full mx-auto">
                            <div className="card w-full shadow-2xl bg-base-100">
                                <form onSubmit={handleLogIn} className="card-body">


                                    {/* Email */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="email">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" name="email" id="email" className="input input-bordered" required />
                                    </div>

                                    {/* password */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="password">
                                            <span className="label-text">Password</span>
                                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                        </label>
                                        <input type={showPassword ? "text" : "password"} placeholder="password" name="password" id="password" className="input input-bordered" required />
                                    </div>

                                    {/* show password checkbox */}
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">Show Password</span>
                                            <input onClick={handleShowPassword} defaultChecked={false} type="checkbox" className="checkbox checkbox-info" />
                                        </label>
                                    </div>

                                    {/* submit button */}
                                    <div className="form-control mt-6">
                                        <input type="submit" className="btn-custom" value="Log In" />
                                    </div>

                                    {/* Switch to register */}
                                    <div className="w-full flex justify-center">
                                        <Link to={'/register'} className="mx-auto hover:underline hover:text-blue-800 text-lg font-bold p-3">If you have no ID, Creat in ID</Link>
                                    </div>

                                    <div className="divider">Or log in with</div>

                                    {/* Google Button */}
                                    <GoogleButton></GoogleButton>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;