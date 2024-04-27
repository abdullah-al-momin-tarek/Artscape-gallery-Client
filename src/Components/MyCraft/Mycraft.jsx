import { useLoaderData } from "react-router-dom";

const Mycraft = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>My email: {data.email}</h2>
    </div>
  );
};

export default Mycraft;
