import Loading from "../../components/Loading";

const StuEnrollCard = ({ load, classesName123 }) => {

    const loading = load;

    console.log(loading, classesName123.enrolledClassName);

    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className="grid gap-3 justify-center">
                        <h1>{classesName123.enrolledClassName.map((pd, index) => <h1 key={index} className="text-lg py-3 text-blue-700 font-semibold">{pd}</h1>)}</h1>
                    </div>
            }
        </div>
    );
};

export default StuEnrollCard;