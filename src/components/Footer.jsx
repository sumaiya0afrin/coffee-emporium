import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import copyright from "../assets/images/more/24.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import background from "../assets/images/more/13.jpg";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <footer className="footer p-10 text-[#331A15] w-4/5 mx-auto px-0">
        <aside className="space-y-4">
          <img src={logo} alt="" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Espresso Emporium
          </h2>
          <p className="text-lg md:text-xl">
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br className="hidden lg:block" />
            memorable moments, to share with your best companion.
          </p>
          <div className="grid grid-flow-col gap-4 text-2xl md:text-3xl ">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
          </div>
          <h4 className="text-2xl md:text-4xl font-semibold">Get in Touch</h4>
          <div className="flex items-center gap-2 md:text-xl">
            <FaPhoneAlt />
            <p>+88 01533 333 333</p>
          </div>
          <div className="flex items-center gap-2 md:text-xl">
            <IoMdMail />
            <p>info@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 md:text-xl">
            <FaLocationDot />
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </aside>

        <nav className="w-full self-center">
          <h6 className="text-2xl md:text-4xl font-semibold">
            Connect with Us
          </h6>
          {/* form  */}

          <form className="card-body w-full p-0 pt-4">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                placeholder="Message"
                rows="8"
                className="input input-bordered h-28"
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <button className="btn border-[#331A15] bg-transparent text-2xl text-[#331A15] hover:bg-[#E3B577]">
                Send Message
              </button>
            </div>
          </form>
        </nav>
      </footer>
      <div
        style={{
          backgroundImage: `url(${copyright})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-white text-center md:text-xl py-2">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
