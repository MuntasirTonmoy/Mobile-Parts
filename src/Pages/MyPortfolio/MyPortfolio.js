import React from "react";
import myPhoto from "../../me.png";
const MyPortfolio = () => {
  return (
    <>
      <div className="card lg:w-3/4   lg:card-side bg-base-100 shadow-xl lg:mx-auto mx-5 mt-10">
        <div className="lg:ml-10 mx-auto my-auto">
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <div className="card-body lg:ml-6 m-0 text-md">
          <h1>
            <span className="text-xl lg:block hidden">Hi, I'm</span>
            <span className="text-3xl font-serif font-bold lg:block hidden">
              {" "}
              MD. Muntasir Hossain.
            </span>
            <span className="text-xl  lg:hidden block text-center">
              Hi, My name is
            </span>
            <span className="text-3xl font-bold font-serif lg:hidden block text-center">
              MD. Muntasir Hossain.
            </span>
          </h1>
          <h2>Email: muntasir01521566317@gmail.com</h2>
          <div>
            <ul className="list-none">
              <li>Skills:</li>
              <li>
                HTML, CSS3, Bootstrap, TailwindCSS, Javascript, React, Node.JS ,
                Mongodb, Github, Firebase, Heroku.
              </li>
              <li className="mt-2">
                My Works (website Link): <br />
                <a
                  className="text-primary"
                  href="https://muntasirtonmoy.github.io/responsive-leader-board-bootstrap5/"
                >
                  Responsive LeaderBoard
                </a>
                <span> , </span>
                <a
                  className="text-primary"
                  href="https://muntasirtonmoy.github.io/Mealdb/"
                >
                  MealDB
                </a>
                <span> , </span>
                <a
                  className="text-primary"
                  href="https://muntasirtonmoy.github.io/myBank/"
                >
                  Simple Bank
                </a>
              </li>
              <h3 className="mt-2">Education:</h3>
              <span>
                Currently studying at Rajshahi University of Engineering and
                Technology.
              </span>
              <table className="table-compact border w-full mt-3">
                <thead className="border">
                  <tr className="text-left">
                    <th>Exam</th>
                    <th>GPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td>H.S.C</td>
                    <td>5.00</td>
                  </tr>

                  <tr>
                    <td>S.S.C</td>
                    <td>5.00</td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
