import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaUserCog } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    fetch(`https://young-cove-10389.herokuapp.com/parts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product Added successfully.", {
            toastId: "success1",
          });
          reset();
        }
      });
  };

  return (
    <div className="mt-10 mb-10 lg:mx-10 mx-6">
      <h1 className="font-serif text-center text-5xl font-bold text-primary">
        Add Product
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="form-control mx-auto   lg:max-w-md max-w-xs shadow-xl p-10 rounded-2xl">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product name"
            className="input input-bordered w-full max-w-md"
            {...register("name", {
              required: {
                value: true,
                message: "Product name is required.",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input
            type="text"
            placeholder="Product pictur URL"
            className="input input-bordered w-full max-w-md"
            {...register("picture", {
              required: {
                value: true,
                message: "Product picture is required.",
              },
            })}
          />
          <label className="label">
            {errors.picture?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.picture.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Write short description"
            className="input input-bordered w-full max-w-md"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required.",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">
              Price/<small>unit</small>
            </span>
          </label>
          <input
            type="number"
            min="1"
            placeholder="Write Product Price"
            className="input input-bordered w-full max-w-md"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required.",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>

          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="number"
            min="1"
            placeholder="Write Minimum Quantity"
            className="input input-bordered w-full max-w-md"
            {...register("minQuantity", {
              required: {
                value: true,
                message: "Minimum quantity is required.",
              },
            })}
          />
          <label className="label">
            {errors.minQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minQuantity.message}
              </span>
            )}
          </label>

          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            min="1"
            placeholder="Write the no. of product you want to add"
            className="input input-bordered w-full max-w-md"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Available quantity is required.",
              },
            })}
          />
          <label className="label">
            {errors.availableQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.availableQuantity.message}
              </span>
            )}
          </label>

          {errors.education?.type === "required" ||
          errors.location?.type === "required" ||
          errors.phone?.type === "required" ||
          errors.socialLinks?.type === "required" ? (
            <button
              type="submit"
              disabled
              className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-4"
            >
              <RiAddCircleLine className=" text-xl"></RiAddCircleLine>Add
              Product
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-4"
            >
              <RiAddCircleLine className=" text-xl"></RiAddCircleLine>Add
              Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
