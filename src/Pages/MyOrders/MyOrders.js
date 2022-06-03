import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Modal from "../Utilities/Modal";

const MyOrders = () => {
  const [orderId, setOrderId] = useState("");
  const [confirm, setConfirm] = useState(false);
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

  useEffect(() => {
    if (confirm) {
      fetch(`https://young-cove-10389.herokuapp.com/myOrders/${orderId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Order Cancelled", {
              toastId: "success1",
            });
            const rest = myOrders.filter((order) => order._id !== orderId);
            setMyOrders(rest);
            setConfirm(false);
          }
        });
    }
  }, [confirm, orderId, myOrders]);

  return (
    <div className="lg:mx-10 mx-6 mt-10 mb-10">
      <Modal setConfirm={setConfirm} />
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

          {myOrders?.map((order) => (
            <tbody key={order._id}>
              <tr className="border">
                <td className="border">{order.name}</td>
                <td className="border text-center">{order.quantity}</td>
                <td className="border text-center">
                  <button className="btn btn-sm btn-success text-white">
                    Pay Now
                  </button>
                </td>
                <td className="border text-center">
                  <label
                    onClick={() => setOrderId(order._id)}
                    htmlFor="confirm-modal"
                    className="btn modal-button btn-sm btn-error"
                  >
                    Cancel
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

export default MyOrders;
