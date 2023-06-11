import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UserTable from "./UserTable";

const ManageUsers = () => {

    const [loading, setLoading] = useState(true);

    const { data: users = [] , refetch} = useQuery(['users'], async () => {
        setLoading(true);
        const res = await fetch('https://b712-summer-camp-server-side.vercel.app/users');
        setLoading(false);
        return res.json();
    });

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