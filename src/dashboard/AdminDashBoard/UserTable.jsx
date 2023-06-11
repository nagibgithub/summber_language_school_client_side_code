import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const UserTable = ({ user, refetc }) => {

    const refetch = refetc;

    const { email, img, name, user_type, _id } = user;


    const handleInstructor = id => {
        fetch(`https://b712-summer-camp-server-side.vercel.app/users/instructor/${id}`, { method: 'PATCH' }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                refetch();
                Swal.fire({ icon: "success", title: `${name} is Instructor now` })
            } else {
                Swal.fire({ icon: "error", title: "something is going wrond maybe" })
            }
        })
    };

    const handleAdmin = id => {
        fetch(`https://b712-summer-camp-server-side.vercel.app/users/admin/${id}`, { method: 'PATCH' }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                refetch();
                Swal.fire({ icon: "success", title: `${name} is Admin now` })
            } else {
                Swal.fire({ icon: "error", title: "something is going wrond maybe" })
            }
        })
    };

    const handleUserDelete = id => {

        fetch(`https://b712-summer-camp-server-side.vercel.app/users/delete/${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                refetch();
                Swal.fire({ icon: "success", title: `${name} is delete now` })
            } else {
                Swal.fire({ icon: "error", title: "something is going wrond maybe" })
            }
        })
    }

    return (
        <tr className="md:text-xl">
            <th>
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        <img src={img} />
                    </div>
                </div>
            </th>
            <td className="capitalize">{name}</td>
            <td>{email}</td>
            <td className="uppercase font-bold" style={user_type == "student" ? { color: "green" } : user_type == "instructor" ? { color: "blue" } : user_type == "admin" ? { color: "red" } : { color: "black" }}>{user_type}</td>
            <td>
                <div className="grid gap-3">
                    <button onClick={() => handleInstructor(_id)} className="btn btn-neutral" disabled={user_type == "instructor" ? true : false}>Make Instructor</button>
                    <button onClick={() => handleAdmin(_id)} className="btn btn-neutral" disabled={user_type == "admin" ? true : false}>Make Admin</button>
                </div>
            </td>
            <td className="text-center"><button onClick={() => handleUserDelete(_id)}><FontAwesomeIcon style={{ color: "#ff0000" }} icon={faTrash} /></button></td>
        </tr>
    );
};

export default UserTable;