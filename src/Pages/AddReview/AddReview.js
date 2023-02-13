import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const AddReview = () => {
  const [user] = useAuthState(auth);
  const userPhoto = "https://i.ibb.co/jGwMrsv/user.jpg";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: user?.displayName,
      picture: user?.photoURL || userPhoto,
    },
  });

  const onSubmit = data => {
    const numberRatings = parseInt(data?.ratings);
    data.ratings = numberRatings;
    fetch("https://tame-red-magpie-shoe.cyclic.app/reviews", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast.success("Review Added", {
            toastId: "success1",
          });
          reset();
        }
      });
  };
  return (
    <div className="mt-10 mb-10 lg:mx-10 mx-6">
      <h1 className="font-serif text-center text-5xl font-bold text-primary">
        Add Review
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="form-control mx-auto   lg:max-w-md max-w-xs shadow-xl p-10 rounded-2xl">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName}
            disabled
            placeholder=""
            className="input input-bordered w-full max-w-md uppercase"
            {...register("userName")}
          />
          <label className="label mt-3">
            <span className="label-text">Ratings</span>
          </label>

          <select
            type="number"
            {...register("ratings")}
            className="select select-bordered"
          >
            <option defaultValue={5}>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>

          <label className="label mt-3">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder=""
            className="textarea textarea-bordered w-full max-w-md"
            {...register("comment", {
              required: {
                value: true,
                message: "Description is required.",
              },
            })}
          />
          <label className="label">
            {errors.comment?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.comment.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-2"
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
