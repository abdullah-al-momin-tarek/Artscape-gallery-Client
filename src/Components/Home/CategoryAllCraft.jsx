import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";

const CategoryAllCraft = ({ params }) => {
  const cCraft = useLoaderData();
  //   console.log(data);
  console.log(params);
  return (
    <div>
      <h2>Here all Art & Craft</h2>
      <div>
        {cCraft.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

CategoryAllCraft.propTypes = {
  params: PropTypes.any,
};

export default CategoryAllCraft;
