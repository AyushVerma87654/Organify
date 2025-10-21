import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import DriftImage from "./DriftImage";

const slides = [
  {
    id: 1,
    title: "Fresh Apples",
    description: "Crisp and sweet apples straight from the farm.",
    price: 9.99,
    image: "/Apple.webp",
  },
  {
    id: 2,
    title: "Organic Bananas",
    description: "Naturally ripened organic bananas.",
    price: 9.99,
    image: "/Banana.jpg",
  },
  {
    id: 3,
    title: "Organic Orange",
    description: "Juicy, seedless organic orange.",
    price: 9.99,
    image: "/Orange.webp",
  },
];

const ImageSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative overflow-hidden min-h-[450px]">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-70 p-2 shadow-md hover:bg-opacity-100 transition"
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-70 p-2 shadow-md hover:bg-opacity-100 transition"
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight size={30} />
      </button>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        spaceBetween={16}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ paddingLeft: "5%", paddingRight: "5%" }}
      >
        {slides.map((slide) => {
          const [transform, setTransform] = React.useState({ x: 0, y: 0 });
          const lastPos = React.useRef({ x: 0, y: 0 });
          const handleMouseMove = (
            e: React.MouseEvent<HTMLDivElement, MouseEvent>
          ) => {
            const { clientX, clientY } = e;
            const dx = clientX - lastPos.current.x;
            const dy = clientY - lastPos.current.y;
            const offset = 10;
            setTransform({
              x: dx < 0 ? offset : dx > 0 ? -offset : 0,
              y: dy < 0 ? offset : dy > 0 ? -offset : 0,
            });
            lastPos.current = { x: clientX, y: clientY };
          };
          const handleMouseLeave = () => {
            setTransform({ x: 0, y: 0 });
          };

          return (
            <SwiperSlide
              key={slide.id}
              style={{ width: "90%" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-center bg-gradient-to-r from-gray-200 via-green-300 to-green-400 min-h-[450px] rounded-md p-6">
                <div className="w-[43%] flex flex-col justify-center px-6">
                  <h3 className="text-5xl font-semibold mb-2 text-orange-600">
                    {slide.title}
                  </h3>
                  <p className="text-xl my-6">{slide.description}</p>
                  <button className="bg-green-700 text-white rounded-md font-bold px-7 py-4 max-w-44">
                    Purchase Now
                  </button>
                </div>
                <div className="w-[40%] flex flex-col justify-between p-6">
                  <div className="flex items-center">
                    <div className="text-orange-600 font-semibold text-3xl">
                      <span>$</span>
                      <span className="relative top-1">{slide.price}</span>
                    </div>
                    <div className="w-[2px] h-7 ml-3 bg-black" />
                    <div className="flex flex-col ml-4">
                      <span className="text-xl font-semibold">PER KG</span>
                      <span className="text-sm">FRESH ORGANIC FRUITS</span>
                    </div>
                  </div>
                  <DriftImage
                    src={slide.image}
                    alt={slide.title}
                    transform={transform}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
