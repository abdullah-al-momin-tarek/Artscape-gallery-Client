import { FaRegStar } from "react-icons/fa";

const CraftCard = ({ craft }) => {
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    displayName,
    photoURL,
  } = craft;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex space-x-4">
        <img
          alt=""
          src={photoURL}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a rel="noopener noreferrer" href="#" className=" font-semibold">
            {displayName}
          </a>
          <span className="text-xs dark:text-gray-600">{processing_time}</span>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <small>#{subcategory_name}</small>
        <h2 className="mb-1 text-xl font-semibold">{item_name}</h2>
        <p className="text-sm dark:text-gray-600">{short_description}</p>
      </div>
      <div className="flex justify-between">
        <p>
          <span className="font-bold ">Price:</span> {price}
        </p>
        <p className="flex gap-2">
          <span className="font-bold ">Ratings: </span>
          <span className="flex items-center gap-">
            <FaRegStar /> {rating}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CraftCard;
