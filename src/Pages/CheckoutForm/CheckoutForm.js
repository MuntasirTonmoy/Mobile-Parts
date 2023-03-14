import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ product }) => {
  const [user] = useAuthState(auth);
  const { _id, name, description, picture, price, quantity } = product;
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const navigate = useNavigate();
  console.log(product);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: price * quantity }),
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret));
    }
  }, [price]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setPaymentError(error?.message || "");
    setSuccess("");
    setPaymentId("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });

    if (intentError) {
      setPaymentError(intentError?.message);
    } else {
      setPaymentError("");
      setSuccess("Congratulation! Payment Successfull.");
      setPaymentId(paymentIntent?.id);
      const payment = {
        payment: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`${process.env.REACT_APP_SERVER_URL}/myOrders/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            setTimeout(() => {
              navigate(`/dashboard/myOrders/${user.email}`);
            }, 2000);
          }
        });
    }
  };

  return (
    <>
      {/* <div className="flex ">
      <div>
        <img src={picture} alt="" />
        <p>{price * quantity}</p>
      </div>
      <div className="card w-[80vw] max-w-lg bg-base-100 shadow-xl lg:mx-auto mt-10 >
        
      </div>
    </div> */}
      <div className="card w-[90vw] lg:w-[60vw] lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img src={picture} alt="Album" className="h-[350px]" />
        </figure>
        <div className="card-body flex felx-col">
          <div className="flex-grow space-y-4">
            {price && (
              <>
                <p className="text-xl">{name}</p>
                <p>Quantity: {quantity}</p>
                <p className="text-2xl font-semibold">
                  Total: ${price * quantity}
                </p>
              </>
            )}
          </div>
          <div className="divider text-primary">Payment</div>
          <div className="">
            {paymentError && <p className="text-red-500">{paymentError}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "18px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button
              className="btn btn-sm mt-8 w-full btn-accent text-white"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
