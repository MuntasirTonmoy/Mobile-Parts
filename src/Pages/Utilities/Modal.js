import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const Modal = ({ setConfirm }) => {
  return (
    <>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <h3 className="font-bold text-7xl text-red-500">
            <RiErrorWarningFill className=" mx-auto" />
          </h3>
          <p className="pt-3 text-lg">
            Are you sure you want to cancel this order?
          </p>
          <div className="modal-action justify-center gap-4">
            <label
              htmlFor="confirm-modal"
              className="btn btn-error modal-button"
            >
              Cancel
            </label>
            <label
              onClick={() => setConfirm(true)}
              htmlFor="confirm-modal"
              className="btn btn-success"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
