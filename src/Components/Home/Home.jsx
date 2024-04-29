import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";
import Banner from "./Banner";
import CategoryCard from "./CategoryCard";

const Home = () => {
  const allCraft = useLoaderData();
  const [categoryCard, setCategoryCard] = useState([]);
  useEffect(() => {
    fetch("https://artscape-gallery-server.vercel.app/categoryCard")
      .then((res) => res.json())
      .then((data) => setCategoryCard(data));
  }, []);
  console.log(categoryCard);
  console.log("data", allCraft);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />

      {/* Exploring */}
      <section className="p-4 lg:p-8 mt-12">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-md shadow-orange-500  lg:flex-row">
            <img
              src="https://i.ibb.co/0MFf3Kj/landscape-k.jpg"
              alt="Landscape Painting"
              className="h-80 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-base-200">
              <span className="text-xs uppercase">Join, it is free</span>
              <h3 className="text-3xl font-bold">
                Landscape Painting Collection
              </h3>
              <p className="my-6 ">
                Explore our collection of stunning landscape paintings,
                featuring breathtaking mountain views and serene forest scenes.
              </p>
              {/* <button type="button" className="self-start">
                View Collection
              </button> */}
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-md shadow-orange-500 lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/RTph0L1/portrait.jpg"
              alt="Portrait Drawing"
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase">Join, it is free</span>
              <h3 className="text-3xl font-bold">Portrait Drawing Selection</h3>
              <p className="my-6 ">
                Discover our range of portrait drawings, including detailed
                pencil sketches and vibrant acrylic portraits.
              </p>
              {/* <button type="button" className="self-start">
                Explore Now
              </button> */}
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-md shadow-orange-500 lg:flex-row">
            <img
              src="https://i.ibb.co/fC5cjst/water-color-paint.webp"
              alt="Watercolour Painting"
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase">Join, it is free</span>
              <h3 className="text-3xl font-bold">Watercolour Art Collection</h3>
              <p className="my-6">
                Dive into our selection of vibrant watercolour paintings,
                featuring exquisite floral compositions and captivating animal
                portraits.
              </p>
              {/* <button type="button" className="self-start ">
                Browse Collection
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* exploring end */}

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

      {/* Get in touch */}

      <section className="py-6  mt-12 border rounded-xl border-orange-500">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>01790000001</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>shikdertarek2019@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Shikder Tarek"
                className="block w-full rounded-md shadow-sm p-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="block w-full rounded-md shadow-sm p-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea rows="3" className="block w-full rounded-md"></textarea>
            </label>
            <button
              type="button"
              className="self-center text-lg btn bg-orange-500 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
