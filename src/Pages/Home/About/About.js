import React from "react";

import { FiSend } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div
        style={{
          background: `url('/images/bg.jpg')`,
          backgroundSize: "cover",
        }}
        className="lg:flex justify-around items-center  lg:px-10 px-6 lg:mt-14 mt-10 py-10"
      >
        <div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary font-serif">
              Contact Us
            </h1>
            <p className="py-3 text-xl">
              For all queries please email us using the form. We will contact
              you as soon as possible.
            </p>
          </div>
        </div>
        <div>
          <div className="card lg:w-96 max-w-lg  shadow-2xl bg-base-100 md:mx-auto">
            <div className=" card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea type="text" className="textarea textarea-bordered" />
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary text-white">
                  <FiSend className="text-xl mr-2"></FiSend>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
