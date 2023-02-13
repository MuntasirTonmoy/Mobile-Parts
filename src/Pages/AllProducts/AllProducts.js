import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../Utilities/Modal";

const AllProducts = () => {
  const [productId, setProductId] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [AllProducts, setAllProducts] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch(`https://young-cove-10389.herokuapp.com/parts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [reload]);

  useEffect(() => {
    if (confirm) {
      fetch(`https://young-cove-10389.herokuapp.com/parts/${productId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Order Cancelled", {
              toastId: "success1",
            });
            const rest = AllProducts.filter((order) => order._id !== productId);
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
        My Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table border  w-full">
          <thead>
            <tr>
              <th className="pl-5">Name</th>
              <th className="text-center">Manage</th>
            </tr>
          </thead>

          {AllProducts?.map((product) => (
            <tbody className="child:text-lg" key={product._id}>
              <tr className="border">
                <td className="border">{product.name}</td>

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
