import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./Pages/Error404/Error404";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Header/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import PasswordRecovery from "./Pages/PasswordRecovery/PasswordRecovery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RequireAuth from "./Pages/Utilities/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/AddReview/AddReview";
import MyProfile from "./Pages/MyProfile/MyProfile";
import ScrollToTop from "./Pages/Utilities/ScrollToTop";
import UpdateProfile from "./Pages/MyProfile/UpdateProfile/UpdateProfile";
import AllUsers from "./Pages/AllUsers/AllUsers";
import RequireAdmin from "./Pages/Utilities/RequireAdmin";
import AllOrders from "./Pages/AllOrders/AllOrders";
import AddProduct from "./Pages/AddProduct/AddProduct";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route
              path="allUsers"
              element={
                <RequireAdmin>
                  <AllUsers></AllUsers>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="allOrders"
              element={
                <RequireAdmin>
                  <AllOrders></AllOrders>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addProducts"
              element={
                <RequireAdmin>
                  <AddProduct></AddProduct>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="allProducts"
              element={
                <RequireAdmin>
                  <AllProducts></AllProducts>
                </RequireAdmin>
              }
            ></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
            <Route
              path="updateProfile"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
            <Route
              path="myOrders/:email"
              element={<MyOrders></MyOrders>}
            ></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/resetPassword"
            element={<PasswordRecovery></PasswordRecovery>}
          ></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/*" element={<Error404></Error404>}></Route>
        </Routes>
      </ScrollToTop>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
