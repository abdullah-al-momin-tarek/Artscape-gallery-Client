import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const Mycraft = () => {
  const crafted = useLoaderData();

  const [card, setCard] = useState(crafted);

  const handleFilter = (e) => {
    console.log(e.target.value);
    const select = e.target.value;
    if (select === "Yes") {
      const data = crafted.filter((d) => d.customization !== "No");
      console.log(data);
      setCard(data);
    } else if (select === "No") {
      const data = crafted.filter((d) => d.customization !== "Yes");
      console.log(data);
      setCard(data);
    } else if (select === "All") {
      setCard(crafted);
    }
  };

  return (
    <div>
      <Helmet>
        <title>My Art & Craft List</title>
      </Helmet>
      <h2 className="font-bold text-3xl text-center">My Added Art & Crafted</h2>
      <div className="mt-5 mb-5 flex items-center gap-3 justify-center">
        <p className="pt-3">Customization</p>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label"></div>
            <select
              className="input input-bordered input-warning w-full max-w-xs"
              id="dropdown"
              name="dropdown"
              // value={filter}
              onChange={handleFilter}
              // {...register("customization")}
            >
              <option value="All">All</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {card.map((craft) => (
          <MyCraftCard
            key={craft._id}
            setCard={setCard}
            card={card}
            craft={craft}
          ></MyCraftCard>
        ))}
      </div>
    </div>
  );
};

export default Mycraft;
