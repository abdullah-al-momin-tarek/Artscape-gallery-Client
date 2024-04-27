import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ craft, card, setCard }) => {
  const { _id, image, item_name, price, rating, customization, stock_status } =
    craft;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your card has been deleted.",
                icon: "success",
              });
              const remaining = card.filter((d) => d._id !== _id);
              setCard(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2 relative">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <p className="bg-orange-500 px-2 w-32 rounded-xl text-center absolute top-0 right-3 text-white">
            {stock_status}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold dark:text-violet-600">
            {item_name}
          </h3>
          <div className="flex justify-between">
            <div>
              <p>
                <span className="font-bold">Price:</span> {price}$
              </p>
              <p>
                <span className="font-bold">Rating:</span> {rating}
              </p>
              <p>
                <span className="font-bold">Customization:</span>{" "}
                {customization}$
              </p>
            </div>
            <div className="join join-vertical space-y-3">
              <Link>
                <button className="btn join-item bg-orange-500 text-white w-full">
                  <FaEdit />
                  Update
                </button>
              </Link>
              <Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn join-item  bg-orange-500 text-white w-full"
                >
                  <span className="text-xl">
                    {" "}
                    <MdOutlineDelete />
                  </span>{" "}
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;