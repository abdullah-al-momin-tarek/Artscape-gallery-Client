import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";

const AllCraft = () => {
  const allCraft = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>All Art & Craft Item</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-12">
        All Art & Craft Item
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCraft.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllCraft;
