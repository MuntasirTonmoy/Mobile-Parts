import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AllUsers = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, [email]);
  return (
    <div className="lg:mx-10 mx-6 mt-14 mb-10">
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

          {users?.map((user) => (
            <tbody key={user._id}>
              <tr className="border">
                <td className="border">{user.email}</td>

                <td className="border text-center">
                  <button className="btn btn-xs text-white">Make Admin</button>
                </td>
                <td className="border text-center">
                  <button className="btn btn-xs btn-error text-white">
                    Delete
                  </button>
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
