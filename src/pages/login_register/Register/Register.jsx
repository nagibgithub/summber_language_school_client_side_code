import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import GoogleButton from "../socialLoginButton/GoogleButton";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {

    const { register, handleSubmit, reset } = useForm();
    const { theme } = useContext(ThemeContext);
    const { creatUser, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showHide, setShowHide] = useState(false);
    const handleShowPass = () => setShowHide(!showHide);

    const handleForm = data => {

        const password = data.password;
        const rePassword = data.rePassword;

        password !== rePassword ?
            Swal.fire({
                icon: 'error',
                title: 'Check the Password',
                text: 'Password and Confirm Password not matched',
            })
            :
            !/(?=^.{6,}$)/.test(password) ?
                Swal.fire({
                    icon: 'error',
                    title: 'Check the Password',
                    text: 'Password must be atleast 6 digit',
                })
                :
                !/(?=.*[A-Z])/.test(password) ?
                    Swal.fire({
                        icon: 'error',
                        title: 'Check the Password',
                        text: 'Atleast one Uppercase letter required',
                    })
                    :
                    !/(?=.*[@$!%*#?&])/.test(password) ?
                        Swal.fire({
                            icon: 'error',
                            title: 'Check the Password',
                            text: 'Atleast one Special @$!%*#?& character required',
                        })
                        :
                        creatUser(data.email, password)
                            .then((res) => {
                                updateUserData(res.user, data.name, data.imageUrl)
                                const savedUser = { name: data.name, email: data.email, img: data.imageUrl };
                                fetch('https://b712-summer-camp-server-side.vercel.app/users', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(savedUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.insertedId) {
                                            reset();
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'User created successfully.',
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            navigate('/');
                                        }
                                    })
                            })

    };

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
                            <div className="card w-full shadow-2xl border-blue-700 border-2">


                                {/* form start */}
                                <form onSubmit={handleSubmit(handleForm)} className="card-body md:grid md:grid-cols-2 text-black">

                                    {/* name */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="name">
                                            <span className="">Full Name</span>
                                        </label>
                                        <input type="text" placeholder="Your Full Name" {...register("name")} id="name" className="input input-bordered" required />
                                    </div>

                                    {/* email */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="email">
                                            <span className="">Your Email</span>
                                        </label>
                                        <input type="email" autoComplete="username" placeholder="example@domain.com" {...register("email")} id="email" className="input input-bordered" required />
                                    </div>

                                    {/* Image URL */}
                                    <div className="form-control md:col-span-2">
                                        <label className="label" htmlFor="imageUrl">
                                            <span className="">Upload your image URL</span>
                                        </label>
                                        <input type="url" placeholder="https://example.com" {...register("imageUrl")} id="imageUrl" className="input input-bordered" required />
                                    </div>

                                    {/* password */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="password">
                                            <span className="">Password</span><span><FontAwesomeIcon icon={showHide ? faEye : faEyeSlash} /></span>
                                        </label>
                                        <input className="input input-bordered" autoComplete="new-password" type={showHide ? "text" : "password"} placeholder="Min 6 Character" {...register("password")} id="password" required />
                                    </div>

                                    {/* re-type password */}
                                    <div className="form-control">
                                        <label className="label" htmlFor="rePassword">
                                            <span className="">Confirm Your Password</span><span><FontAwesomeIcon icon={showHide ? faEye : faEyeSlash} /></span>
                                        </label>
                                        <input autoComplete="new-password" type={showHide ? "text" : "password"} placeholder="Same as above password" {...register("rePassword")} id="rePassword" className="input input-bordered" required />
                                    </div>

                                    {/* show password */}
                                    <div className="form-control mt-3 col-span-2">
                                        <label className="cursor-pointer flex gap-3 items-center">
                                            <input type="checkbox" onClick={handleShowPass} className="checkbox checkbox-primary" />
                                            <span className="">Show the Password</span>
                                        </label>
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