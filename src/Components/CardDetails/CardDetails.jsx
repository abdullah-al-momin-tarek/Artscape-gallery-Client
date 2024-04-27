import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
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
    email,
  } = data;

  return (
    <div className="bg-orange-50 mt-12 rounded-xl">
      {/* <BannerDetails title={item_name} image={image}></BannerDetails> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 p-5 items-center">
        <div>
          <img
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            src={image}
            alt=""
          />
          <figcaption className="text-center">{item_name}</figcaption>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Author Details: </h2>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <img
              className="md:h-14 md:w-14 h-16 w-16 rounded-full"
              src={photoURL}
              alt=""
            />
            <div>
              <p>
                <span className="font-bold">Author Name: </span>
                {displayName}
              </p>
              <p>
                <span className="font-bold">Author Email:</span> {email}
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-bold border-b pb-5 mt-5">{item_name}</h2>
          <p className="mt-5 border-b pb-5">
            <span className="font-bold">Description: </span>
            {short_description}
          </p>
          <h2 className="text-xl font-bold  pt-5 border-b pb-5">
            More Details
          </h2>
          <p className="pt-5 mb-2">
            <span className="font-bold ">SubCategory Name: </span>
            {subcategory_name}
          </p>
          <p className=" mt-2 mb-2 flex items-center gap-1">
            <span className="font-bold">Rating: </span> {rating} <FaRegStar />
          </p>
          <p>
            <span className="font-bold">Processing Time: </span>
            {processing_time} Hours
          </p>
          <p className="mt-2 mb-2">
            <span className="font-bold">Customization: </span>
            {customization}
          </p>
          <p className="mt-2 mb-2 ">
            <span className="font-bold">Stock Status: </span>
            <span className="bg-orange-600 text-white px-2 rounded-xl">
              {stock_status}
            </span>
          </p>
          <p className="text-xl font-bold mb-2">
            <span className="font-black">Price: </span>
            {price}$
          </p>
          <div className="flex justify-end">
            <button className="btn bg-orange-500 text-white">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
