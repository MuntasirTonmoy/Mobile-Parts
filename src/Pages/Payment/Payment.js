import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51L6ugwBTcwsL4TpwZJuKKD0dEGp2yY36VEZ4c655MTuiu9pFmCGbQPduBBYgeWyaQS0FMs7ZsrNdBLpWfTslAE1w00HLC0zm1X"
);

const Payment = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/myOrders/payment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
  return (
    <div className="min-h-[50vh] flex flex-col items-center">
      <h1 className="text-center text-primary mt-10 text-3xl text-bold">
        Payment
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm product={product} />
      </Elements>
    </div>
  );
};

export default Payment;
