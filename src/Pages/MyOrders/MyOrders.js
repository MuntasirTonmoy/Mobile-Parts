import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);

  return (
    <div className="lg:mx-10 mx-6">
      <h1 className="text-5xl text-primary text-center font-bold font-serif  mt-10 mb-10">
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
                  <button className="btn btn-sm btn-error">Cancel</button>
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
