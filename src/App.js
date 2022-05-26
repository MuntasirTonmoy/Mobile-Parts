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
import Loading from "./Pages/Utilities/Loading";

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
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
