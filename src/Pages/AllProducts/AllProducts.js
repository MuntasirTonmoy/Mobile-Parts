import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../Utilities/Modal";

const AllProducts = () => {
  const [productId, setProductId] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [AllProducts, setAllProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/parts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, [reload]);

  useEffect(() => {
    if (confirm) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/parts/${productId}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success("Order Cancelled", {
              toastId: "success1",
            });
            const rest = AllProducts.filter(order => order._id !== productId);
            setAllProducts(rest);
            setConfirm(false);
            setReload(!reload);
          }
        });
    }
  }, [confirm]);

  return (
    <div className="lg:mx-10 mx-6 mt-10 mb-10">
      <Modal setConfirm={setConfirm} />
      <h1 className="text-5xl text-primary text-center font-bold font-serif  mb-10">
        All products
      </h1>
      <div className="overflow-x-auto">
        <table className="table border w-full">
          <thead>
            <tr>
              <th className="pl-5">Name</th>
              <th className="pl-5">Available Quantity</th>
              <th className="text-center">Action</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>

          {AllProducts?.map(product => (
            <tbody className="child:text-lg" key={product._id}>
              <tr className="border">
                <td className="border">{product.name}</td>
                <td className="border">{product.availableQuantity}</td>

                <td className="border text-center">
                  <Link to={`/dashboard/updateProduct/${product._id}`}>
                    <label
                      htmlFor="confirm-modal"
                      className="btn modal-button btn-sm btn-success"
                    >
                      Update
                    </label>
                  </Link>
                </td>

                <td className="border text-center">
                  <label
                    onClick={() => setProductId(product._id)}
                    htmlFor="confirm-modal"
                    className="btn modal-button btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
