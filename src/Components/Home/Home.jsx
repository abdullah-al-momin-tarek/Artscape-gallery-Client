import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";
import Banner from "./Banner";
import CategoryCard from "./CategoryCard";

const Home = () => {
  const allCraft = useLoaderData();
  const [categoryCard, setCategoryCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categoryCard")
      .then((res) => res.json())
      .then((data) => setCategoryCard(data));
  }, []);
  console.log(categoryCard);
  console.log("data", allCraft);
  return (
    <div>
      <Banner />
      <h2 className="text-3xl font-bold text-center mt-12">
        Art & Craft Items
      </h2>
      <p className="md:w-3/2 p-5 md:p-1 lg:w-1/2 w-full text-center mx-auto mb-12 mt-5">
        Explore a diverse collection of creative supplies and tools in the Art &
        Craft Items section. From paints and brushes to sculpting tools and
        specialty papers, find everything you need to unleash your creativity
        and bring your artistic visions to life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allCraft.slice(0, 6).map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-12">
        Art & Craft Categories
      </h2>
      <p className="md:w-3/2 p-5 md:p-1 lg:w-1/2 w-full text-center mx-auto mb-12 mt-5">
        Art & Craft Categories encompass various creative pursuits like
        painting, drawing, and sculpture, each offering unique techniques and
        mediums for self-expression and exploration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryCard.map((card) => (
          <CategoryCard key={card._id} card={card}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
