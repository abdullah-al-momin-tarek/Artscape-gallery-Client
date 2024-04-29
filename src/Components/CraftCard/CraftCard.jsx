import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    processing_time,
    stock_status,
    displayName,
    photoURL,
  } = craft;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-base-200 shadow-orange-400 ">
      <div className="flex space-x-4">
        <div className="relative">
          <img
            alt=""
            src={photoURL ? photoURL : "https://i.ibb.co/NV3y0QM/no-image.jpg"}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <p className="bg-orange-500 text-white px-2 rounded-xl absolute top-20  w-32 text-center">
            {stock_status}
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <a rel="noopener noreferrer" href="#" className=" font-semibold">
            {displayName}
          </a>
          <span className="text-xs dark:text-gray-600">
            #{subcategory_name}
          </span>
        </div>
      </div>
      <div>
        <img
          src={image ? image : "https://i.ibb.co/NV3y0QM/no-image.jpg"}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <small className="flex items-center gap-1">
          <span className="text-base">
            {" "}
            <IoMdTime />
          </span>{" "}
          {processing_time} Hour
        </small>
        <h2 className="mb-1 text-xl font-bold">{item_name}</h2>
        <p className="text-sm dark:text-gray-600">{short_description}</p>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <span className="font-bold ">Price:</span> {price}$
        </p>
        <p className="flex gap-2">
          <span className="font-bold ">Ratings: </span>
          <span className="flex items-center gap-">
            <FaRegStar /> {rating}
          </span>
        </p>
      </div>
      <div className="flex justify-end">
        <Link to={`/craftDetails/${_id}`}>
          <button className="btn bg-orange-500 text-white">View Details</button>
        </Link>
      </div>
    </div>
  );
};

CraftCard.propTypes = {
  craft: PropTypes.object,
};

export default CraftCard;
