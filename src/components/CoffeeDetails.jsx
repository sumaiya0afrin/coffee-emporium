import Header from "./Header";
import Footer from "./Footer";
import background from "../assets/images/more/11.png";
import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
const CoffeeDetails = () => {
  const coffee = useLoaderData();
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header></Header>
      <div
        className="pb-28"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="md:w-4/5 md:mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl md:text-3xl py-9 justify-center"
          >
            <FaLongArrowAltLeft />
            Back to Home
          </Link>

          <div className="bg-[#F4F3F0] md:px-10 lg:py-16 lg:px-44">
            <div className="card card-side flex-col md:flex-row">
              <figure>
                <img src={coffee.photo} alt={coffee.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">Niceties</h2>
                <div className="raleway space-y-2">
                  <p>
                    <span className="font-bold">Name:</span> {coffee.name}
                  </p>
                  <p>
                    <span className="font-bold">Chef:</span> {coffee.chef}
                  </p>
                  <p>
                    <span className="font-bold">Supplier:</span>{" "}
                    {coffee.supplier}
                  </p>
                  <p>
                    <span className="font-bold">Taste:</span> {coffee.taste}
                  </p>
                  <p>
                    <span className="font-bold">Category:</span>{" "}
                    {coffee.category}
                  </p>
                  <p>
                    <span className="font-bold">Details:</span> {coffee.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CoffeeDetails;
