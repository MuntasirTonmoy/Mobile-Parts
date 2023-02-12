import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch("https://tame-red-magpie-shoe.cyclic.app/myOrders")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div className="lg:mx-10 mx-6 mt-10 mb-10">
      <h1 className="text-5xl text-primary text-center font-bold font-serif  mb-10">
        All Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table border  w-full">
          <thead>
            <tr>
              <th className="pl-5">Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Shipping</th>
            </tr>
          </thead>

          {products?.map(product => (
            <tbody key={product._id}>
              <tr className="border">
                <td className="border">{product.name}</td>
                <td className="border text-center">{product.quantity}</td>
                <td className="border text-center">
                  <p>Unpaid</p>
                </td>
                <td className="border text-center">
                  <label
                    htmlFor="confirm-modal"
                    className="btn modal-button btn-sm btn-success text-white"
                  >
                    Ship now
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

export default AllOrders;
