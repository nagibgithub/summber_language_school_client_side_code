import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ClassFeedback = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleFeedback = event => {
        event.preventDefault();
        const feedbackValue = event.target.feedback.value;
        console.log(feedbackValue);
        fetch(`https://b712-summer-camp-server-side.vercel.app/class/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: feedbackValue })
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                Swal.fire({ icon: "success", title: 'feedback send successfully' });
                navigate('/dashboard')
            } else {
                Swal.fire({ icon: "error", title: "something is going wrond maybe" });
            }
        })
    };



    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleFeedback} className="mx-auto">
                <div>
                    <label className="label" htmlFor="feedback">Write your feedback</label>
                </div>
                <input type="text" name="feedback" id="feedback" className="input input-bordered input-lg w-full max-w-xs" />
                <div className="my-5 flex justify-center">
                    <input type="submit" value="Sent your feedback" className="btn btn-neutral" />
                </div>
            </form>
        </div>
    );
};

export default ClassFeedback;