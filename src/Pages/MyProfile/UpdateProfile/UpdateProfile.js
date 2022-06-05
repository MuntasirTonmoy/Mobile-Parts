import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaUserCog } from "react-icons/fa";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      userName: user?.displayName,
    },
  });

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Profile updated successfully.", {
            toastId: "success1",
          });
          reset();
          navigate("/dashboard/myProfile");
        }
      });
  };

  return (
    <div className="mt-10 mb-10 lg:mx-10 mx-6">
      <h1 className="font-serif text-center text-5xl font-bold text-primary">
        Update Profile
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="form-control mx-auto   lg:max-w-md max-w-xs shadow-xl p-10 rounded-2xl">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            placeholder="Write here."
            className="input input-bordered w-full max-w-md"
            {...register("education", {
              required: {
                value: true,
                message: "Please fill up all the information.",
              },
            })}
          />

          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="District name"
            className="input input-bordered w-full max-w-md"
            {...register("location", {
              required: {
                value: true,
                message: "location info is required.",
              },
            })}
          />
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="phone"
            placeholder="Enter Phone no."
            className="input input-bordered w-full max-w-md"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone no. is required.",
              },
            })}
          />
          <label className="label">
            <span className="label-text">Social Links</span>
          </label>
          <input
            type="text"
            placeholder="https://www.example.com"
            className="input input-bordered w-full max-w-md"
            {...register("socialLinks", {
              required: {
                value: true,
                message: "Social info is required.",
              },
            })}
          />
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.education.message}
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
              <FaUserCog className=" text-xl"></FaUserCog>Update Profile
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-4"
            >
              <FaUserCog className=" text-xl"></FaUserCog>Update Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
