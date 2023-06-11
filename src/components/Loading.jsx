import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-sky-600">Loading <FontAwesomeIcon icon={faSpinner} spin /></h1>
        </div>
    );
};

export default Loading;