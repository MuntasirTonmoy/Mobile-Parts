import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Error404 from "./Pages/Error404/Error404";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
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
            <Route path="allUsers" element={<AllUsers></AllUsers>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
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

          <Route
            path="/myPortfolio"
            element={<MyPortfolio></MyPortfolio>}
          ></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/myPortfolio"
            element={<MyPortfolio></MyPortfolio>}
          ></Route>
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
