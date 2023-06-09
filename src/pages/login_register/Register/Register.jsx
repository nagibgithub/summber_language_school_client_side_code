import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import GoogleButton from "../socialLoginButton/GoogleButton";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { ThemeContext } from "../../../contexts/ThemeProvider";

const Register = () => {

    const { theme } = useContext(ThemeContext);

    const passwordValue = useRef(null);
    const confirmPasswordValue = useRef(null);

    const [showHide, setShowHide] = useState(false);
    const handleShowPass = () => setShowHide(!showHide);

    const [passMatch, setPassMatch] = useState(false);
    const [passLength, setPassLength] = useState(false);
    const [passNumber, setPassNumber] = useState(false);
    const [passSpecial, setPassSpecial] = useState(false);
    const [passUppercase, setPassUppercase] = useState(false);


    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
        const imageUrl = form.imageUrl.value;

        if (password !== rePassword) {
            Swal.fire({
                icon: 'error',
                title: "Confirm Password don't match",
            })
            return;
        } else if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: "Password must be atleast 6 chracters",
            })
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: "atleast one UpperCase Letter",
            })
            return;
        } else if (!/(?=.*[a-z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: "atleast one LowerCase Letter",
            })
            return;
        } else if (!/(?=.*\d)/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: "atleast one Number",
            })
            return;
        } else if (! /(?=.*[@$!%*#?&])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: "atleast one special Character",
            })
            return;
        }

        const formData = { name, email, password, imageUrl, rePassword };
        console.log(formData);
    };

    const handlePassTest = event => {
        event.preventDefault();
        const password = event.target.value;
        // /(?=.*[a-zA-Z])/.test(password) ? setPassAlphabet(true) : setPassAlphabet(false);
        /(?=.*[A-Z])/.test(password) ? setPassUppercase(true) : setPassUppercase(false);
        /(?=^.{6,}$)/.test(password) ? setPassLength(true) : setPassLength(false);
        /(?=.*\d)/.test(password) ? setPassNumber(true) : setPassNumber(false);
        /(?=.*[@$!%*#?&])/.test(password) ? setPassSpecial(true) : setPassSpecial(false);
        if (passwordValue.current.value === {}) {
            setPassMatch(false)
        } else {
            passwordValue.current.value === confirmPasswordValue.current.value ? setPassMatch(true) : setPassMatch(false);
        }
    };

    const handleConfirmPassTest = () => {
        if (passwordValue.current.value === {}) {
            setPassMatch(false);
        } else {
            passwordValue.current.value === confirmPasswordValue.current.value ? setPassMatch(true) : setPassMatch(false);
        }
    }

    return (
        <>
            <Helmet>
                <title>Summer School | Register</title>
            </Helmet>
            <div style={theme ? { backgroundColor: "#1F3865", color: "white" } : { backgroundColor: "white", color: "#1F3865" }}>
                <div className="hero min-h-screen">
                    <div className="hero-content grid md:grid-cols-3 justify-center items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register Now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="max-w-xl w-full mx-auto col-span-2">
                            <div className="card w-full shadow-2xl">


                                {/* form start */}
                                <form onSubmit={handleForm} className="card-body md:grid md:grid-cols-2">

                                    {/* name */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="name">
                                            <span className="">Full Name</span>
                                        </label>
                                        <input type="text" placeholder="Your Full Name" name="name" id="name" className="input input-bordered" required />
                                    </div>

                                    {/* email */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="email">
                                            <span className="">Your Email</span>
                                        </label>
                                        <input type="email" placeholder="example@domain.com" name="email" id="email" className="input input-bordered" required />
                                    </div>

                                    {/* Image URL */}
                                    <div className="form-control md:col-span-2">
                                        <label className="label" htmlFor="imageUrl">
                                            <span className="">Upload your image URL</span>
                                        </label>
                                        <input type="url" placeholder="https://example.com" name="imageUrl" id="imageUrl" className="input input-bordered" required />
                                    </div>

                                    {/* password */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="password">
                                            <span className="">Password</span><span><FontAwesomeIcon icon={showHide ? faEye : faEyeSlash} /></span>
                                        </label>
                                        <input className="input input-bordered" ref={passwordValue} onChange={handlePassTest} type={showHide ? "text" : "password"} autoComplete="new-password" placeholder="Min 8 Character" name="password" id="password" required />
                                    </div>

                                    {/* re-type password */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="rePassword">
                                            <span className="">Confirm Your Password</span><span><FontAwesomeIcon icon={showHide ? faEye : faEyeSlash} /></span>
                                        </label>
                                        <input onChange={handleConfirmPassTest} ref={confirmPasswordValue} type={showHide ? "text" : "password"} placeholder="Same as above password" name="rePassword" id="rePassword" className="input input-bordered" required />
                                    </div>

                                    {/* show password */}
                                    <div className="form-control mt-3 col-span-2">
                                        <label className="cursor-pointer flex gap-3 items-center">
                                            <input type="checkbox" onClick={handleShowPass} className="checkbox checkbox-primary" />
                                            <span className="">Show the Password</span>
                                        </label>
                                    </div>

                                    {/* password check message */}
                                    <div className="my-5 text-red-500 form-control">
                                        <h1 className="font-bold" style={{ color: `${passUppercase ? "green" : "red"}` }}>UpperCase: <FontAwesomeIcon size="lg" icon={passUppercase ? faCheck : faXmark} /></h1>
                                        <h1 className="font-bold" style={{ color: `${passNumber ? "green" : "red"}` }}>Number: <FontAwesomeIcon size="lg" icon={passNumber ? faCheck : faXmark} /> </h1>
                                        <h1 className="font-bold" style={{ color: `${passSpecial ? "green" : "red"}` }}>Special Cheracter : <FontAwesomeIcon size="lg" icon={passSpecial ? faCheck : faXmark} /></h1>
                                        <h1 className="font-bold" style={{ color: `${passLength ? "green" : "red"}` }}>Pass Length 6 : <FontAwesomeIcon size="lg" icon={passLength ? faCheck : faXmark} /></h1>
                                    </div>


                                    {/* password check message */}
                                    <div className="my-5 text-red-500 form-control">
                                        <h1 className="font-bold" style={{ color: `${passMatch ? "green" : "red"}` }}>Match Confirm Pass: <FontAwesomeIcon size="lg" icon={passMatch ? faCheck : faXmark} /></h1>
                                    </div>

                                    {/* submit button */}
                                    <div className="form-control mt-6 md:col-span-2">
                                        <input type="submit" className="btn btn-primary" value={'Submit'} />
                                    </div>

                                </form>

                                {/* google login */}
                                <div>
                                    <GoogleButton></GoogleButton>
                                </div>



                                {/* login link */}
                                <div className="w-full flex justify-center">
                                    <Link to={'/login'} className="mx-auto hover:underline hover:text-blue-800 text-lg font-bold p-3">Already Registered? Go to Log In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;