import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { BsCheck2Circle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedPart, setSelectedPart] = useState({});
  useEffect(() => {
    fetch(`https://tame-red-magpie-shoe.cyclic.app/purchase/${id}`)
      .then(res => res.json())
      .then(data => setSelectedPart(data));
  }, [id]);

  const {
    _id,
    name,
    picture,
    description,
    price,
    minQuantity,
    availableQuantity,
  } = selectedPart;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: user?.displayName,
      email: user?.email,
    },
  });

  const onSubmit = data => {
    const { name, picture, price, description } = selectedPart;
    const { quantity } = data;

    fetch("https://tame-red-magpie-shoe.cyclic.app/myOrders", {
      method: "POST",
      body: JSON.stringify({ ...data, name, picture, price, description }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          toast.success("Order Placed Successfully", {
            toastId: "success1",
          });
          reset();

          fetch("https://tame-red-magpie-shoe.cyclic.app/parts", {
            method: "PATCH",
            body: JSON.stringify({
              _id,
              availableQuantity: availableQuantity - quantity,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then(res => res.json())
            .then(data => console.log(data));

          setTimeout(() => {
            navigate(`/dashboard/myOrders/${user.email}`);
          }, 2000);
        }
      });
  };

  return (
    <>
      <div className="card lg:card-side lg:mx-10 mx-6 lg:mt-14 mt-10 mb-10 bg-base-100 border rounded-3xl">
        <div className="card-body">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="text-lg  mx-auto">
              <figure>
                <img src={picture} alt={name} className="h-[300px] w-[300px]" />
              </figure>
              <h2 className="font-bold text-3xl mt-4 mb-3 text-primary font-serif">
                {name}
              </h2>
              <span className="mb-3">ID: {_id}</span>
              <p className="mt-3">{description}</p>
              <p className="text-lg mt-2 font-bold text-green-600">
                Price: ${price}/<small>unit</small>
              </p>
              <p className="mt-3">Minimun Order quantity: {minQuantity}</p>
              <p className="mt-3">
                Available Quantity:{" "}
                {availableQuantity < minQuantity ? (
                  <span className="text-red-500">Stock out</span>
                ) : (
                  availableQuantity
                )}
              </p>
            </div>
            <hr className="lg:hidden " />

            {/*----------form------ */}
            <div className="w-full lg:w-4/6 lg:mx-0 mx-auto lg:shadow-xl lg:rounded-3xl  lg:px-10 lg:pb-10 text-center ">
              <h1 className="text-xl text-primary font-bold uppercase">
                Order Form
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <label className="label mt-2">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName}
                  disabled
                  className="input input-bordered w-full max-w-md uppercase"
                />
                <label className="label mt-2">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={user?.email}
                  disabled
                  className="input input-bordered w-full max-w-md"
                />
                <label className="label mt-2">
                  <span className="label-text">Quantity</span>
                </label>
                {minQuantity && (
                  <input
                    type="number"
                    disabled={availableQuantity < minQuantity}
                    defaultValue={
                      availableQuantity < minQuantity ? ` ` : minQuantity
                    }
                    className="input input-bordered w-full max-w-md"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Quantity is required.",
                      },
                      min: {
                        value: `${minQuantity}`,
                        message: `Quantity can't be less than ${minQuantity}`,
                      },
                      max: {
                        value: `${availableQuantity}`,
                        message: `Quantity can't be greater than ${availableQuantity}`,
                      },
                    })}
                  />
                )}
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "min" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "max" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  disabled={availableQuantity < minQuantity}
                  placeholder=""
                  className="input input-bordered w-full max-w-md"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is required.",
                    },

                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: "Please provide a valid Phone number",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  disabled={availableQuantity < minQuantity}
                  placeholder=""
                  className="textarea textarea-bordered w-full max-w-md"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
                <div>
                  {availableQuantity < minQuantity ||
                  errors.quantity ||
                  errors.phone ||
                  errors.address ? (
                    <button
                      type="submit"
                      disabled
                      className="btn btn-primary mt-2 text-white w-full"
                    >
                      <BsCheck2Circle className="text-xl mr-2"></BsCheck2Circle>
                      Confirm Order
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary mt-2 text-white w-full"
                    >
                      <BsCheck2Circle className="text-xl mr-2"></BsCheck2Circle>
                      Confirm Order
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
