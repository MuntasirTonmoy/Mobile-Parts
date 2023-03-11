import React, { useEffect, useState } from "react";
import Loading from "../../Utilities/Loading";
import Part from "./Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("default");
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    fetch("https://tame-red-magpie-shoe.cyclic.app/parts")
      .then(response => response.json())
      .then(data => {
        setParts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let copyArray = [...parts]; // each time useEffect run it is copying data from parts as parts remain intact it is copying default data each time
    switch (sortType) {
      case "ascending":
        copyArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "descending":
        copyArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        copyArray.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        copyArray.sort((a, b) => b.price - a.price);
        break;
      default:
      //return setSortData(parts);
    }
    setSortData(copyArray);
  }, [sortType, parts]);

  return (
    <>
      <div className="lg:mx-10 mx-6 mt-10">
        <h1 className="text-center text-5xl font-serif font-bold lg:mt-20 mt-14 mb-10 text-primary">
          Our Products
        </h1>
        {!loading && (
          <div className="w-full flex md:justify-start justify-center mb-3">
            <div className="font-[600] ml-2 text-[1.15rem]">
              Sort:
              <select
                className="select select-bordered ml-3"
                onChange={e => setSortType(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="low-to-high">Price (Low to high)</option>
                <option value="high-to-low">Price (High to low)</option>
              </select>
            </div>
          </div>
        )}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {sortData.map(part => (
              <Part key={part._id} part={part}></Part>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Parts;
