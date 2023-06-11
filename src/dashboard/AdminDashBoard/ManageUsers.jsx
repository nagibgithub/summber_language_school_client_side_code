import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import UserTable from "./UserTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], isLoading: loading, refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    return (
        <div>
            {
                loading ?
                    <h1 className="text-center text-5xl font-bold text-sky-600">Loading <FontAwesomeIcon icon={faSpinner} spin /></h1>
                    :
                    <>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead className="md:text-xl">
                                        <tr>
                                            <th>User Image</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>User Role</th>
                                            <th>User Role Change</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map(user => <UserTable key={user._id} user={user} refetc={refetch}></UserTable>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default ManageUsers;