import React, { useEffect, useState } from "react";
import Loading from "../../Utilities/Loading";
import Part from "./Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://young-cove-10389.herokuapp.com/parts")
      .then((response) => {
        if (response.status === 404) {
          window.location.reload();
        }
        return response.json();
      })
      .then((data) => {
        setParts(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="lg:mx-10 mx-6 mt-10">
        <h1 className="text-center text-5xl font-serif font-bold lg:mt-20 mt-14 mb-10 text-primary">
          Our Products
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {parts.map((part) => (
              <Part key={part._id} part={part}></Part>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Parts;
