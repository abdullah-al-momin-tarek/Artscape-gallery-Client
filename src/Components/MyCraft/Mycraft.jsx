import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const Mycraft = () => {
  const crafted = useLoaderData();

  const [card, setCard] = useState(crafted);

  const handleFilter = (e) => {
    console.log(e.target.value);
    const select = e.target.value;
    if (select === "Yes") {
      const data = crafted.filter((d) => d.customization !== "No");
      setCard(data);
    } else if (select === "No") {
      const data = crafted.filter((d) => d.customization !== "Yes");
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
      {card.length === 0 && (
        <section className="flex items-center h-full sm:p-16">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-40 h-40"
            >
              <path
                fill="currentColor"
                d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
              ></path>
              <rect
                width="176"
                height="32"
                x="168"
                y="320"
                fill="currentColor"
              ></rect>
              <polygon
                fill="currentColor"
                points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
              ></polygon>
              <polygon
                fill="currentColor"
                points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
              ></polygon>
            </svg>
            <p className="text-3xl font-bold">
              You do not add any Art and Craft
            </p>
            <Link className="flex justify-center items-center" to={"/addCraft"}>
              <button className="btn bg-orange-500 text-white">
                Add Craft Now
              </button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Mycraft;
