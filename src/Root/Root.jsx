import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="mt-12 container mx-auto">
        {" "}
        <Outlet />
      </div>

      <div className="mt-12 bg-black text-white ">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
