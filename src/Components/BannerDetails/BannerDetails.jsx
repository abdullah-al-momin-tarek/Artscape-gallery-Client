import PropTypes from "prop-types";
const BannerDetails = ({ title, image }) => {
  return (
    <div
      className="bg-no-repeat bg-cover rounded-xl mt-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <div className="p-24 flex items-center justify-center ">
        <h1 className="text-4xl text-white font-bold text-center bg-yellow-700 inline p-2 rounded-xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
BannerDetails.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default BannerDetails;
