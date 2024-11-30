import { BsCup } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import background from "../assets/images/more/1.png";
import { useState } from "react";

const Products = () => {
  const coffees = useLoaderData();

  const [removeCoffee, setRemoveCoffee] = useState(coffees);
  return (
    <div
      className="my-28"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center mb-12 space-y-2">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-3xl lg:text-5xl text-[#331A15]">
          Our Popular Products
        </h2>
        <Link
          to="/addCoffee"
          className="btn bg-[#E3B577] border-[#331A15] text-white text-xl md:text-2xl hover:border hover:border-[#331A15] hover:bg-[#F5F4F1] hover:text-white"
        >
          Add Coffee <BsCup className="text-[#331A15]" />
        </Link>
      </div>

      <div className="w-4/5 mx-auto">
        <div className="grid lg:grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              removeCoffee={removeCoffee}
              setRemoveCoffee={setRemoveCoffee}
            ></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
