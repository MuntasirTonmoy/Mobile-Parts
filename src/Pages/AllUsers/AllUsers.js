import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Modal from "../Utilities/Modal";

const AllUsers = () => {
  const [user] = useAuthState(auth);
  const [userId, setUserId] = useState("");
  const [confirm, setConfirm] = useState(false);
  const email = user?.email;
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`https://tame-red-magpie-shoe.cyclic.app/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, [email, reload]);

  const handleAdmin = email => {
    fetch(`https://tame-red-magpie-shoe.cyclic.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast.success("Successfully made Admin.", {
            toastId: "success1",
          });
          setReload(!reload);
        }
      });
  };

  useEffect(() => {
    if (confirm) {
      fetch(`https://tame-red-magpie-shoe.cyclic.app/users/${userId}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success("User Deleted", {
              toastId: "success1",
            });
            const rest = users.filter(user => user._id !== userId);
            setUsers(rest);
            setConfirm(false);
          }
        });
    }
  }, [confirm, userId, users]);
  return (
    <div className="lg:mx-10 mx-6 mt-14 mb-10">
      <Modal setConfirm={setConfirm} />
      <h1 className="text-6xl text-primarry font-serif text-primary text-center font-bold mb-10">
        All Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table border  w-full child:text-lg">
          <thead>
            <tr>
              <th className="pl-5">Email</th>

              <th className="text-center">Role</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>

          {users?.map(user => (
            <tbody key={user._id}>
              <tr className="border">
                <td className="border">{user.email}</td>

                <td className="border text-center">
                  {user?.role === "admin" ? (
                    <div className="badge badge-success text-white">Admin</div>
                  ) : (
                    <button
                      onClick={() => handleAdmin(user.email)}
                      className="btn btn-xs text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border text-center">
                  <label
                    htmlFor="confirm-modal"
                    onClick={() => setUserId(user._id)}
                    className="btn modal-button btn-xs btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
