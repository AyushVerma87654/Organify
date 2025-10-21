import { useEffect, useRef, useState, type FC } from "react";
import Peach from "/Peach.png";
import PeachCan from "/PeachCan.png";
import { RiDrinks2Fill } from "react-icons/ri";
import { BiSolidDrink } from "react-icons/bi";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

interface ProductSpotlightSectionProps {}

const ProductSpotlightSection: FC<ProductSpotlightSectionProps> = () => {
  const peachImageRef = useRef<HTMLDivElement | null>(null);
  const canImageRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!peachImageRef.current || !canImageRef.current) return;

      const peachTop =
        peachImageRef.current.getBoundingClientRect().top + window.scrollY;
      const canTop =
        canImageRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollRangeStart = peachTop - window.innerHeight * 0.25;
      const scrollRangeEnd = canTop - window.innerHeight * 0.75;

      const currentScroll = window.scrollY;
      const totalScrollRange = scrollRangeEnd - scrollRangeStart;

      if (currentScroll < scrollRangeStart) {
        setProgress(0);
      } else if (currentScroll > scrollRangeEnd) {
        setProgress(1);
      } else {
        const scrollProgress =
          (currentScroll - scrollRangeStart) / totalScrollRange;
        setProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = -8 + progress * -27.6;
  const translateY = -65 + progress * 133;

  return (
    <div className="text-lg w-[90%] mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-7xl font-semibold">
            Wholesome Dairy Delights Delivered Fresh to You
          </h1>
          <div className="w-[55%] mx-auto my-12">
            <p className="tracking-[0.4px]">
              Experience the goodness of fresh, wholesome dairy products
              delivered to your doorstep for ultimate convenience.
            </p>
            <div className="space-x-3 space-y-3 my-9 font-bold">
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Fruits
              </button>
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Vegetarian
              </button>
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Sweet Snacks
              </button>
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Crackers
              </button>
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Pancake
              </button>
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Fruits
              </button>
              <button className="px-7 py-3 border-2 border-green-700 text-green-700 bg-white cursor-pointer hover:text-white hover:bg-green-700 rounded-lg transition-colors duration-500 ease-in-out">
                Creams
              </button>
            </div>
          </div>
        </div>
        <div ref={peachImageRef}>
          <img src={Peach} alt="peach image" className="w-full h-64 -mb-14" />
        </div>
      </div>
      <div className="relative w-full h-[0px]">
        <img
          src={PeachCan}
          alt="Sliding Peach Can"
          className="absolute top-0 right-0 w-[11.5rem] h-auto z-20"
          style={{
            transform: `translate(${translateX}vw, ${translateY}vh) rotate(${
              15 - progress * 15
            }deg)`,
            transition: "transform 1.5s ease-in-out",
          }}
        />
      </div>
      <div className="mt-64">
        <h1 className="text-7xl font-semibold text-center w-[80%] mx-auto">
          <span className="text-orange-600">Pure Organic </span>
          <span>Peach Ginger Delightful Refreshment</span>
        </h1>
        <div className="flex mt-44 mb-12">
          <div className="flex flex-col gap-14 w-[37%]">
            <div className="flex items-center justify-center gap-12">
              <div>
                <RiDrinks2Fill className="text-6xl" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">
                  Naturally Sweet Flavour
                </h3>
                <p className="text-gray-700 text-lg tracking-wide">
                  Savor the naturally sweet flavor of juicy peaches, perfectly
                  complemented by a hint of ginger for a refreshingly drink.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-12">
              <div>
                <BiSolidDrink className="text-6xl" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">
                  Invigorating Ginger Kick
                </h3>
                <p className="text-gray-700 text-lg tracking-wide">
                  Experience an invigorating ginger kick that adds a bold, zesty
                  twist to every sip, leaving you refreshed and energized.
                </p>
              </div>
            </div>
          </div>
          <div ref={canImageRef} className="-mt-[4.5rem] mx-auto">
            <img
              src={PeachCan}
              alt="Static Center Peach Can"
              className="w-[11.5rem] h-auto"
              style={{ transform: "rotate(-15deg)" }}
            />
          </div>
          <div className="flex flex-col gap-14 w-[35%]">
            <div className="flex items-center justify-center gap-12">
              <div>
                <MdEnergySavingsLeaf className="text-6xl" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">
                  Boosts Natural Energy
                </h3>
                <p className="text-gray-700 text-lg tracking-wide">
                  Boost your natural energy with every sip of our Peach Ginger
                  drink, blending fruity sweetness with a revitalizing ginger.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-12">
              <div>
                <LiaGlassMartiniAltSolid className="text-6xl" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">
                  Crisp Refreshing Taste
                </h3>
                <p className="text-gray-700 text-lg tracking-wide">
                  Experience a crisp, refreshing taste with every sip of Peach
                  Ginger, blending vibrant fruitiness with a hint of zest.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-9">
          <button className="px-8 py-3 bg-red-500 text-white rounded-md">
            <span className="flex items-center justify-center gap-4">
              <span>Browse All Products</span>
              <FaPlus />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSpotlightSection;
