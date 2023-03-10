import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="lg:mx-10 mx-6 lg:mt-14 mt-10">
        <section className="w-full bg-secondary rounded-xl ">
          <div className="container px-4 py-5 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-row text-center justify-center text-primary my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary my-auto mr-2 lg:block md:block hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
                <h1 className="font-bold text-3xl font-serif lg:mb-0 mb-2">
                  Subscribe Our Newsletter
                </h1>
              </div>
              <div className="text-center text-accent my-auto">
                <h2 className="lg:text-xl md:text-xl text-xs lg:mb-0 mb-2">
                  get discount coupons!
                </h2>
              </div>
              <div className="py-2 mx-4 lg:py-10">
                <div className="bg-white shadow  flex w-full">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full py-2 px-4"
                  />
                  <button className="bg-accent hover:bg-primary py-2 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscribe;
