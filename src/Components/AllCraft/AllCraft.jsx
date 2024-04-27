import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";

const AllCraft = () => {
  const allCraft = useLoaderData();

  return (
    <div>
      <h1>total item {allCraft.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCraft.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllCraft;
