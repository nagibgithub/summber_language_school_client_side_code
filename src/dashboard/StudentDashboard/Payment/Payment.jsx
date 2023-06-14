import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], isLoading: loading, } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/student/class/selected')
        return res.data;
    })
    const total = users.reduce((sum, item) => sum + parseInt(item.price), 0);
    const price = parseFloat(total.toFixed(2))
    console.log(loading, total, price);










    return (
        <div>
            <div className="border-y-2 border-gray-400 my-5 w-2/3 mx-auto py-3">
                <h1 className="text-center text-xl font-semibold">Pay to confirm your class</h1>
                <hr className="border-2 w-2/3 mx-auto my-3" />
                <h1 className="text-center text-base font-semibold">Provide Your Card Information</h1>

            </div>




            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} classData={users}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;