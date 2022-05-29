import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { BsCheck2Circle } from "react-icons/bs";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [selectedPart, setSelectedPart] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedPart(data));
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

  return (
    <>
      <div class="card lg:card-side lg:mx-10 mx-6 lg:mt-14 mt-10 mb-10 bg-base-100 border rounded-none">
        <div class="card-body">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="text-lg  mx-auto">
              <figure>
                <img src={picture} alt={name} className="h-[300px] w-[300px]" />
              </figure>
              <h2 class="font-bold text-3xl mt-4 mb-3 text-primary font-serif">
                {name}
              </h2>
              <span className="mb-3">ID: {_id}</span>
              <p className="mt-3">{description}</p>
              <p className="text-lg mt-2 font-bold text-green-600">
                Price: ${price}/<small>piece</small>
              </p>
              <p className="mt-3">Minimun Order quantity: {minQuantity}</p>
              <p className="mt-3">Available Quantity: {availableQuantity}</p>
            </div>
            <hr className="lg:hidden " />

            {/*----------form------ */}
            <div className="w-full lg:w-4/6 lg:mx-0 mx-auto lg:shadow-xl lg:rounded-3xl  lg:px-10 pb-10 text-center ">
              <h1 className="text-xl text-primary font-bold uppercase">
                Order Form
              </h1>
              <form action="">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={user?.displayName}
                  disabled
                  class="input input-bordered w-full max-w-md uppercase"
                />
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={user?.email}
                  disabled
                  class="input input-bordered w-full max-w-md"
                />
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  required
                  min={`${minQuantity}`}
                  placeholder={`Minimum Quantity ${minQuantity}`}
                  class="input input-bordered w-full max-w-md"
                />
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  placeholder=""
                  class="input input-bordered w-full max-w-md"
                />
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <textarea
                  type="address"
                  placeholder=""
                  class="textarea textarea-bordered w-full max-w-md"
                />
                <div className="mt-3">
                  <button
                    type="submit"
                    class="btn btn-primary mt-2 text-white w-full"
                  >
                    <BsCheck2Circle className="text-xl mr-2"></BsCheck2Circle>
                    Confirm Order
                  </button>
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
