import background from "../assets/images/more/Rectangle_1.png";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  const navbar = location.pathname === "/" ? "absolute" : "";
  return (
    <div>
      <div
        className={`navbar justify-center ${navbar} z-10 max-w-screen-2xl`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" />
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl">
            Espresso Emporium
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
