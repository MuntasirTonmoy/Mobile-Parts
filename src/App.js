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

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
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
