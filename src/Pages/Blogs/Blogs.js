import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="card w-100 bg-base-100 border lg:mx-10 sm: mx-5 mt-10 text-left">
        <div className="card-body">
          <p className="text-xl font-serif">
            Q. How will you improve the performance of a React Application?
          </p>
          <p className="text-lg">
            <span className="text-xl text-green-500">Ans.</span> For improving
            the performance of React Application I will do these things written
            below.
          </p>
          <ul className="list-decimal text-lg ml-5">
            <li>
              I will use React.fragment to avoid additional HTML element
              wrappers.
            </li>
            <li>I will avoid using Index as Key for map.</li>
            <li>I will memoize React Components by using React.memo </li>
            <li>I will use lazy loading for images.</li>
          </ul>
        </div>
      </div>
      <div className="card w-100 bg-base-100 border lg:mx-10 sm: mx-5 mt-10 text-left">
        <div className="card-body">
          <p className="text-xl font-serif">
            Q. What are the different ways to manage a state in a React
            application?
          </p>
          <p className="text-lg">
            <span className="text-xl text-green-500">Ans.</span> There are many
            way to manage a state in React application. One can manage state in
            many different ways by using
          </p>
          <ul className="list-decimal text-lg ml-5">
            <li>useState, useReducer hooks</li>
            <li>Custom hooks</li>

            <li>Context API</li>
            <li> Redux</li>
            <li>React Query </li>
          </ul>
        </div>
      </div>
      <div className="card w-100 bg-base-100 border lg:mx-10 sm: mx-5 mt-10 text-left">
        <div className="card-body">
          <p className="text-xl font-serif">
            Q. What is a unit test? Why should write unit tests?
          </p>
          <p className="text-lg">
            <span className="text-xl text-green-500">Ans.</span> Unit testing
            means testing the small unit that means a simple line of code or a
            function on a single component of the web application.We should
            write unit testing because
          </p>
          <ul className="list-decimal text-lg ml-5">
            <li>Unit testing save time and money.</li>
            <li>
              It helps to fix bugs early in the development cycle and save
              costs.
            </li>

            <li>
              Well written unit test can be a documentation of the code written
              by developer
            </li>
            <li>
              For reusing any part of the code unit testing makes it easy.
            </li>
            <li>Unit testing simplifies the debugging process. </li>
          </ul>
        </div>
      </div>
      <div className="card w-100 bg-base-100 border lg:mx-10 sm: mx-5 mt-10 text-left">
        <div className="card-body">
          <p className="text-xl font-serif">
            Q. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </p>
          <p className="text-lg">
            <span className="text-xl text-green-500">Ans.</span> I will
            implement a search to find the product is written below
          </p>
          <ul className="list-decimal text-lg ml-5">
            <li>
              First I will create an input field where the product name will be
              written and I will collect the value from the input field on
              serach button click and store it in a variable.
            </li>
            <li>
              Then I will map the products array and after that I will filter
              the product by the name from the input field
            </li>
            <br />
            const [searchText, setSearchText] = useState(' ');
            <br></br>
            const handleSearchText = (e) =&gt; &#123; <br /> const selected =
            e.target.search.value;
            <br />
            setSearchText(searchText);
            <br />
            &#125;
            <br />
            const selectedProducts = products.map(product =&gt; product.name ===
            searchText);
          </ul>
        </div>
      </div>
      <div className="card w-100 bg-base-100 border lg:mx-10 sm: mx-5 mt-10 text-left">
        <div className="card-body">
          <p className="text-xl font-serif">
            Q. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts ?
          </p>
          <p className="text-lg">
            <span className="text-xl text-green-500">Ans.</span> We use
            setProducts because setProducts triggered the render function and
            tells React that the component and its children needs to be needs to
            be rerender with the update state. It means that setProducts helps
            to update the latest value to the state variable and it shows the
            updated value in the UI by Rerendering the component and its child.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
