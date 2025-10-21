import { useState, type FC } from "react";
import { MdLiveHelp, MdPayment } from "react-icons/md";
import { TbTruckDelivery, TbMoneybag } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const features = [
  {
    id: 1,
    icon: <MdPayment className="text-8xl my-4" />,
    description: "Flexible Payment with Various Credit Card",
  },
  {
    id: 2,
    icon: <TbTruckDelivery className="text-8xl my-4" />,
    description: "Quick, No Cost Delivery & Setup Included",
  },
  {
    id: 3,
    icon: <TbMoneybag className="text-8xl my-4" />,
    description: "30-Day, No-Risk Money-Back Assurance",
  },
  {
    id: 4,
    icon: <MdLiveHelp className="text-8xl my-4" />,
    description: "24/7 Expert Help, Always Just a Click Away",
  },
  {
    id: 5,
    icon: <MdPayment className="text-8xl my-4" />,
    description: "Flexible Payment with Various Credit Card",
  },
  {
    id: 6,
    icon: <TbTruckDelivery className="text-8xl my-4" />,
    description: "Quick, No Cost Delivery & Setup Included",
  },
  {
    id: 7,
    icon: <TbMoneybag className="text-8xl my-4" />,
    description: "30-Day, No-Risk Money-Back Assurance",
  },
  {
    id: 8,
    icon: <MdLiveHelp className="text-8xl my-4" />,
    description: "24/7 Expert Help, Always Just a Click Away",
  },
];

interface FeatureSliderProps {}

const FeatureSlider: FC<FeatureSliderProps> = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      className="rounded-b-md bg-white w-[90%] min-h-72 mx-auto my-10 font-semibold outline"
    >
      {features.map((feature) => {
        const [scale, setScale] = useState(1);

        const handleMouseEnter = () => {
          setScale(0);
          setTimeout(() => setScale(1), 200);
        };

        const handleMouseLeave = () => {
          setScale(0.3);
          setTimeout(() => setScale(1), 150);
        };

        return (
          <SwiperSlide key={feature.id}>
            <div className="w-full h-full p-[0.7px] bg-gradient-to-b from-white via-gray-100 to-gray-200">
              <div
                className="h-full w-full bg-white p-10 flex flex-col"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[96px] flex items-center justify-center">
                  <div
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>

                <p className="text-lg mt-9">{feature.description}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FeatureSlider;
