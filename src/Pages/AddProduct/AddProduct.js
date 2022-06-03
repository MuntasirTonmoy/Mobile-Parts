import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch("https://young-cove-10389.herokuapp.com/myOrders")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return <div>this is add product page {products.length}</div>;
};

export default AddProduct;
