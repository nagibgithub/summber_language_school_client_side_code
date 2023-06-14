import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PaymentHistoryCard from "./PaymentHistoryCard";
import Loading from "../../../components/Loading";

const PaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: enrollClass = [], isLoading: loading } = useQuery([''], async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    });




    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    enrollClass.map((pd, index) => <PaymentHistoryCard key={pd._id} payment={pd} index={index}></PaymentHistoryCard>)
            }
        </div>
    );
};

export default PaymentHistory;