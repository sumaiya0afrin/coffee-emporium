import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, removeCoffee, setRemoveCoffee }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E3B577",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = removeCoffee.filter((cof) => cof._id !== id);
              setRemoveCoffee(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side flex-col md:flex-row bg-[#F5F4F1] p-7">
        <figure>
          <img src={coffee.photo} alt="Movie" />
        </figure>
        <div className="md:flex w-full justify-between items-center">
          <div className="raleway text-lg">
            <h2 className="">Name: {coffee.name}</h2>
            <p className=" flex-grow-0">Chef: {coffee.chef}</p>
            <p>Price: {coffee.price} Taka</p>
          </div>

          <div className="flex md:flex-col gap-2 ">
            <Link
              to={`/coffeeDetails/${coffee._id}`}
              className="btn join-item bg-[#D2B48C] text-white text-xl hover:text-[#D2B48C] hover:bg-transparent hover:border-[#D2B48C]"
            >
              <FaEye />
            </Link>
            <Link
              to={`/updateCoffee/${coffee._id}`}
              className="btn join-item bg-[#3C393B] text-white text-xl hover:text-[#3C393B] hover:bg-transparent hover:border-[#3C393B]"
            >
              <MdModeEditOutline />
            </Link>
            <button
              onClick={() => handleDelete(coffee._id)}
              className="btn join-item bg-[#EA4744] text-white text-xl hover:text-[#EA4744] hover:bg-transparent hover:border-[#EA4744]"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  coffee: PropTypes.object,
  removeCoffee: PropTypes.array,
  setRemoveCoffee: PropTypes.func,
};

export default Coffee;
