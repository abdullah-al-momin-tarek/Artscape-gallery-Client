import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const { subcategory_name, image, difficulty, description, materials } = card;
  return (
    <Link to={`/subCategoryItem/${subcategory_name}`}>
      <div className="max-w-lg  shadow-md  rounded-xl p-5 h-full shadow-orange-400 bg-base-200">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-violet-600">
              {subcategory_name}
            </h3>
            <p className="text-gray-500">{difficulty}</p>
            <p className="leading-snug dark:text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2">
              <p>Materials: </p>
              {materials.map((m, idx) => (
                <p
                  className="bg-orange-400 px-2 rounded-xl text-white"
                  key={idx}
                >
                  {m}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  card: PropTypes.object,
};

export default CategoryCard;
