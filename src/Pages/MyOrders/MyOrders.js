import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import CustomLink from "../Utilities/CustomLink";
import Modal from "../Utilities/Modal";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`https://tame-red-magpie-shoe.cyclic.app/myOrders/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => setMyOrders(data));
  }, [email]);

  useEffect(() => {
    if (confirm) {
      fetch(`https://tame-red-magpie-shoe.cyclic.app/myOrders/${orderId}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success("Order Cancelled", {
              toastId: "success1",
            });
            const rest = myOrders.filter(order => order._id !== orderId);
            setMyOrders(rest);
            setConfirm(false);
          }
        });
    }
  }, [confirm, orderId, myOrders]);

  const handlePayment = id => {
    const order = myOrders.find(product => product._id === id);
    const { picture, _id, price, quantity, name, email, description } = order;

    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        _id,
        name,
        picture,
        price,
        quantity,
        email,
        description,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch(err => console.log(err));
  };

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

          {myOrders?.map(order => (
            <tbody key={order._id}>
              <tr className="border">
                <td className="border">{order.name}</td>
                <td className="border text-center">{order.quantity}</td>
                <td className="border text-center">
                  {order?.paid ? (
                    <p className="text-lg text-green-500 ">Paid</p>
                  ) : (
                    <CustomLink to={`/payment/${order._id}`}>
                      <button
                        //onClick={() => handlePayment(order._id)}
                        className="btn btn-sm btn-success text-white"
                      >
                        Pay Now
                      </button>
                    </CustomLink>
                  )}
                </td>
                <td className="border text-center">
                  {order?.paid ? (
                    <label
                      disabled
                      onClick={() => setOrderId(order._id)}
                      htmlFor="confirm-modal"
                      className="btn modal-button btn-sm btn-error"
                    >
                      Cancel
                    </label>
                  ) : (
                    <label
                      onClick={() => setOrderId(order._id)}
                      htmlFor="confirm-modal"
                      className="btn modal-button btn-sm btn-error"
                    >
                      Cancel
                    </label>
                  )}
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
