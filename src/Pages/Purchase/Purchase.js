import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { _id } = useParams();
  const [selectedPart, setSelectedPart] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${_id}`)
      .then((res) => res.json())
      .then((data) => setSelectedPart(data));
  }, [_id]);

  return <div>item found {selectedPart.name}</div>;
};

export default Purchase;
