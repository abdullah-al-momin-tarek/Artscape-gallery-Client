import { Swiper, SwiperSlide } from "swiper/react";

import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {/* Slide - 1 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-around bg-base-300 p-5 rounded-xl">
          <div className="text-4xl font-bold space-y-5">
            <h2 className="">Best of</h2>
            <h2 className="bg-gradient-to-r from-orange-600 to-purple-600 inline-block text-transparent bg-clip-text">
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Landscape Painting",
                    "Portrait Drawing",
                    "Watercolour Painting",
                    "Oil Painting",
                    "Charcoal Sketching",
                    "Cartoon Drawing",
                  ]}
                  loop={6}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <h2> Explore here and Enjoy Art</h2>
          </div>
          <div>
            <img
              className="h-96 rounded-xl border-4 border-yellow-600"
              src="https://i.ibb.co/9NNW90m/landscape-img.jpg"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* Slide - 2 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-around bg-base-300 p-5 rounded-xl">
          <div className="text-4xl font-bold space-y-5">
            <h2 className="">Best of</h2>
            <h2 className="bg-gradient-to-r from-orange-600 to-purple-600 inline-block text-transparent bg-clip-text">
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Landscape Painting",
                    "Portrait Drawing",
                    "Watercolour Painting",
                    "Oil Painting",
                    "Charcoal Sketching",
                    "Cartoon Drawing",
                  ]}
                  loop={6}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <h2> Explore here and Enjoy Art</h2>
          </div>
          <div>
            <img
              className="h-96 rounded-xl border-4 border-yellow-600"
              src="https://i.ibb.co/8rC487K/water-color.jpg"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-around bg-base-300 p-5 rounded-xl">
          <div className="text-4xl font-bold space-y-5">
            <h2 className="">Best of</h2>
            <h2 className="bg-gradient-to-r from-orange-600 to-purple-600 inline-block text-transparent bg-clip-text">
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Landscape Painting",
                    "Portrait Drawing",
                    "Watercolour Painting",
                    "Oil Painting",
                    "Charcoal Sketching",
                    "Cartoon Drawing",
                  ]}
                  loop={6}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <h2> Explore here and Enjoy Art</h2>
          </div>
          <div>
            <img
              className="h-96 rounded-xl border-4 border-yellow-600"
              src="https://i.ibb.co/qFrfP81/carosel.jpg"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
