import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/parts`)
      .then(response => response.json())
      .then(data => {
        setParts(data);
        setLoading(false);
      });
  }, []);

  const product = parts.length > 0 && parts.find(elm => elm._id === id);
  const { name, description, picture, price, minQuantity, availableQuantity } =
    product;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = data => {
    const {
      name,
      picture,
      description,
      price,
      minQuantity,
      availableQuantity,
    } = data;
    fetch(`${process.env.REACT_APP_SERVER_URL}/updatepart`, {
      method: "PATCH",
      body: JSON.stringify({
        id,
        name,
        picture,
        description,
        price: parseInt(price),
        minQuantity: parseInt(minQuantity),
        availableQuantity: parseInt(availableQuantity),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast.success("Product updated Successfully", {
            toastId: "success1",
          });
          reset({
            name: "",
            picture: "",
            description: "",
            price: "",
            minQuantity: "",
            availableQuantity: "",
          });
          setTimeout(() => {
            navigate("/dashboard/allProducts");
          }, 1500);
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl text-primary text-center font-bold font-serif  my-10">
        Update Product
      </h1>

      {product && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-10">
          <div className="form-control mx-auto   lg:max-w-md max-w-xs shadow-xl p-10 rounded-2xl">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              defaultValue={name === null ? "" : name}
              placeholder="Product name"
              className="input input-bordered w-full max-w-md"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
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
              <span className="label-text">Image</span>
            </label>

            <input
              type="text"
              defaultValue={picture === null ? "" : picture}
              placeholder="Image URL"
              className="input input-bordered w-full max-w-md"
              {...register("picture", {
                required: {
                  value: true,
                  message: "image info is required.",
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
              <span className="label-text">description</span>
            </label>

            <input
              type="text"
              defaultValue={description === null ? "" : description}
              placeholder="Product description"
              className="input input-bordered w-full max-w-md"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required.",
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
              <span className="label-text">Price</span>
            </label>

            <input
              type="number"
              defaultValue={price === null ? "" : price}
              placeholder="Product price"
              className="input input-bordered w-full max-w-md"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required.",
                },
                min: {
                  value: `1`,
                  message: `Price can't be less than 1`,
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
              defaultValue={minQuantity === null ? "" : minQuantity}
              placeholder="Minimum order quantity"
              className="input input-bordered w-full max-w-md"
              {...register("minQuantity", {
                required: {
                  value: true,
                  message: "Minimum Quantity is required.",
                },
                min: {
                  value: `1`,
                  message: `Minimum Quantity can't be less than 1`,
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
              defaultValue={availableQuantity === null ? "" : availableQuantity}
              placeholder="Available product quantity"
              className="input input-bordered w-full max-w-md"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Available quantity is required.",
                },
                min: {
                  value: `1`,
                  message: `Available quantity can't be less than 1`,
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

            {errors.name?.type === "required" ||
            errors.price?.type === "required" ||
            errors.picture?.type === "required" ||
            errors.minQuantity?.type === "required" ||
            errors.description?.type === "required" ||
            errors.availableQuantity?.type === "required" ? (
              <button
                type="submit"
                disabled
                className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-4"
              >
                Update Product
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-4"
              >
                Update Product
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateProduct;
