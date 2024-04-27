import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const Mycraft = () => {
  const crafted = useLoaderData();

  const [card, setCard] = useState(crafted);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center">My Added Art & Crafted</h2>
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
