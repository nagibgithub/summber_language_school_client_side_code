
const PaymentHistoryCard = ({ payment, index }) => {

    console.log(payment);
    const { price, date, transactionId, enrolledClassName } = payment;

    const dateed = new Date(date);



    return (
        <div className="border-2 rounded-lg shadow-lg p-5 my-5">
            <h1>No. {index + 1}</h1>
            <h1 className="text-lg font-semibold">Payment Date: {dateed.toString()}</h1>
            <h1 className="text-lg font-semibold">Payment Amount: ${price}</h1>
            <h1 className="text-lg font-semibold">Payment TransactionId: {transactionId}</h1>
            <h1 className="text-lg font-semibold">Enrolled Classes:
                {
                    enrolledClassName.map((pd, index) => <h1 key={index} className="text-lg font-semibold pl-10">{index + 1}. {pd}</h1>)
                }
            </h1>
        </div>
    );
};

export default PaymentHistoryCard;