import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://young-cove-10389.herokuapp.com/myOrders/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      fetch(`https://young-cove-10389.herokuapp.com/myOrders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const rest = myOrders.filter((order) => order._id !== id);
            setMyOrders(rest);
          }
        });
    }
  };

  return (
    <div className="lg:mx-10 mx-6 mt-10 mb-10">
      <h1 className="text-5xl text-primary text-center font-bold font-serif  mb-10">
        My Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table border  w-full">
          <thead>
            <tr>
              <th className="pl-5">Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Cancel</th>
            </tr>
          </thead>

          {myOrders.map((order) => (
            <tbody key={order._id}>
              <tr className="hover border">
                <td className="border">{order.name}</td>
                <td className="border text-center">{order.quantity}</td>
                <td className="border text-center">
                  <button className="btn btn-sm btn-success text-white">
                    Pay Now
                  </button>
                </td>
                <td className="border text-center">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-sm btn-error"
                  >
                    Cancel
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

export default MyOrders;
