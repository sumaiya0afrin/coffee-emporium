import { FaLongArrowAltLeft } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import error from "../assets/images/404/404.gif";

const Error = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header></Header>
      <div className="w-4/5 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl md:text-3xl py-9 justify-center"
        >
          <FaLongArrowAltLeft />
          Back to Home
        </Link>

        <div className="w-full lg:h-[800px]">
          <img src={error} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
