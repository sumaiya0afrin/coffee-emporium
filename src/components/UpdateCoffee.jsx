import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Footer from "./Footer";
import background from "../assets/images/more/11.png";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.coffeeName.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };

    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Updated Successfully",
            icon: "success",
          });
        }
      });
  };

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

          <div className="bg-[#F4F3F0] pt-16">
            <div className="text-center space-y-4">
              <h3 className="text-4xl">Update Existing Coffee Details</h3>
              <p className="text-center text-lg">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at{" "}
                <br className="hidden lg:block" /> its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed <br /> to using Content
                here.
              </p>
            </div>
            <form onSubmit={handleUpdateCoffee} className="card-body">
              <div className="grid md:grid-cols-2 gap-2 md:gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="coffeeName"
                    defaultValue={coffee.name}
                    placeholder="Enter coffee name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    defaultValue={coffee.chef}
                    placeholder="Enter coffee chef"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={coffee.supplier}
                    placeholder="Enter coffee supplier"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={coffee.taste}
                    placeholder="Enter coffee taste"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={coffee.category}
                    placeholder="Enter coffee category"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    defaultValue={coffee.details}
                    placeholder="Enter coffee details"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={coffee.photo}
                    name="photo"
                    placeholder="Enter photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={coffee.price}
                    name="price"
                    placeholder="Enter Price"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#E3B577] border-[#331A15] text-xl md:text-2xl hover:border hover:border-[#331A15] hover:bg-transparent hover:text-[#E3B577]">
                  Update Coffee Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;
