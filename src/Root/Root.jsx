import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="mt-12">
        {" "}
        <Outlet />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
