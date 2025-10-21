import { type FC } from "react";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FcRefresh } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const homes = [
    { id: 1, title: "Home 1" },
    { id: 2, title: "Home 2" },
    { id: 3, title: "Home 3" },
    { id: 4, title: "Home 4" },
    { id: 5, title: "Home 5" },
    { id: 6, title: "Coming Soon", comingSoon: true },
  ];

  return (
    <div>
      <div className="py-9 px-13 flex items-center justify-center gap-4">
        <div className="relative group flex items-center gap-3 cursor-pointer font-semibold">
          <div className="flex gap-3 items-center">
            <FiMenu className="text-2xl text-yellow-500" />
            <span>All</span>
          </div>

          <div className="absolute top-full left-0 mt-6 w-56 z-20 bg-white shadow-md rounded-md px-8 py-8 text-gray-700 font-semibold origin-top transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-200 ease-out">
            {[
              "Crackers",
              "Fresh Fruits",
              "Glutenfree",
              "Organic",
              "Vegan",
              "Vegeterian",
            ].map((item, index) => (
              <div
                key={index}
                className="cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2 py-3"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mx-4">
          <div className="text-3xl tracking-tight font-semibold text-green-700">
            Organify
          </div>
          <div className="text-sm">Organic Food Store</div>
        </div>
        <div className="group">
          <div className="flex items-center gap-2.5 cursor-pointer font-semibold select-none">
            <span>Home</span>
            <MdKeyboardArrowDown className="text-xl text-red-400 mt-1 group-hover:hidden" />
            <MdKeyboardArrowUp className="text-xl text-red-400 mt-1 hidden group-hover:block" />
          </div>
          <div className="absolute left-0 mt-10 z-50 w-screen shadow-lg rounded-md opacity-0 scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100 transition-transform duration-200 ease-out px-10 py-8 bg-gray-100">
            <div className="grid grid-cols-3 gap-10 w-full">
              {homes.map((home, index) => (
                <div
                  key={index}
                  className="space-y-3 group/card relative cursor-pointer bg-white p-6 rounded-xl"
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full animate-dotCycle`}
                        style={{
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-md group/card h-full w-full mt-6">
                    {!home.comingSoon ? (
                      <>
                        <img
                          src="/Screenshot.png"
                          alt={home.title}
                          className="w-[100%] h-[85%] object-cover rounded-md"
                        />
                        <div className="absolute bottom-22 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-6 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 ease-out">
                          <button className="text-white text-sm px-5 py-4 mb-4 rounded bg-red-500 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-3">
                            <span className="font-bold">Light Mode</span>
                            <AiOutlinePlus className="text-lg" />
                          </button>
                          <button className="text-white text-sm px-5 py-4 mb-4 rounded bg-green-600 hover:bg-red-500 transition-colors duration-200 flex items-center justify-center gap-3">
                            <span className="font-bold">Dark Mode</span>
                            <AiOutlinePlus className="text-lg" />
                          </button>
                        </div>
                        <div className="text-center text-lg font-semibold mt-5">
                          {home.title}
                        </div>
                      </>
                    ) : (
                      <div className="rounded-md">
                        <div className="relative w-full h-full overflow-hidden rounded-md">
                          <img
                            src="/Screenshot.png"
                            alt={home.title}
                            className="w-[100%] h-[85%] object-cover rounded-md"
                          />
                          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-md" />
                        </div>

                        <div className="text-center text-lg font-semibold mt-5">
                          {home.title}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <span className="font-semibold">Shop</span>
          <MdKeyboardArrowDown className="text-xl text-red-400 mt-1" />
        </div>
        <div className="relative group flex items-center gap-2.5 cursor-pointer">
          <span className="font-semibold">Pages</span>
          <MdKeyboardArrowDown className="text-xl text-red-400 mt-1 group-hover:hidden" />
          <MdKeyboardArrowUp className="text-xl text-red-400 mt-1 hidden group-hover:block" />
          <div className="absolute top-full left-0 mt-6 w-56 z-20 font-semibold bg-white shadow-md rounded-md px-8 py-8 text-gray-700 origin-top transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-200 ease-out">
            {["About Us", "Landing Page", "Page 404"].map((item, index) => (
              <div
                key={index}
                className={`
          cursor-pointer transition-all duration-200
          hover:text-green-600 hover:underline hover:underline-offset-4 
          hover:pl-2
          ${index === 1 ? "py-6" : ""}
        `}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative group flex items-center gap-2.5 cursor-pointer font-semibold">
          <span>Blog</span>
          <MdKeyboardArrowDown className="text-xl text-red-400 mt-1 group-hover:hidden" />
          <MdKeyboardArrowUp className="text-xl text-red-400 mt-1 hidden group-hover:block" />
          <div className="absolute top-full left-0 mt-6 w-56 z-20 bg-white shadow-md py-8 text-gray-700 origin-top transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-200 ease-out">
            <div className="relative group/item flex justify-between items-center cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-10 pl-8 pr-6">
              <span>Blog Standard</span>
              <MdKeyboardArrowRight className="text-md text-gray-500 group-hover/item:text-green-600" />
              <div className="absolute -top-3.5 left-full w-56 z-30 bg-white shadow-md px-8 py-8 text-gray-700 origin-left transform scale-0 opacity-0 group-hover/item:scale-100 group-hover/item:opacity-100 transition-all duration-200 ease-out">
                <div className="cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  Left Sidebar
                </div>
                <div className="py-6 cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  Without Sidebar
                </div>
                <div className="cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  Right Sidebar
                </div>
              </div>
            </div>

            <div className="relative group/item mt-6 flex justify-between items-center cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-10 pl-8 pr-6">
              <span>Blog Grid</span>
              <MdKeyboardArrowRight className="text-md text-gray-500 group-hover/item:text-green-600" />
              <div className="absolute -top-3.5 left-full w-56 z-30 bg-white shadow-md px-8 py-8 text-gray-700 origin-left transform scale-0 opacity-0 group-hover/item:scale-100 group-hover/item:opacity-100 transition-all duration-200 ease-out">
                <div className="cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  2 Columns
                </div>
                <div className="py-6 cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  3 Columns
                </div>
              </div>
            </div>

            <div className="relative group/item mt-6 flex justify-between items-center cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-10 pl-8 pr-6">
              <span>Blog Details</span>
              <MdKeyboardArrowRight className="text-md text-gray-500 group-hover/item:text-green-600" />
              <div className="absolute -top-3.5 left-full w-56 z-30 bg-white shadow-md px-8 py-8 text-gray-700 origin-left transform scale-0 opacity-0 group-hover/item:scale-100 group-hover/item:opacity-100 transition-all duration-200 ease-out">
                <div className="cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  Left Sidebar
                </div>
                <div className="py-6 cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  Without Sidebar
                </div>
                <div className="cursor-pointer transition-all duration-200 hover:text-green-600 hover:underline hover:underline-offset-4 hover:pl-2">
                  Right Sidebar
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-semibold">Contact Us</div>
        <span className="w-[0.5px] h-3 ml-3 mt-0.5 bg-gray-300"></span>
        <div className="flex gap-1.5 ml-5">
          <FiSearch className="text-xl text-red-400 mt-0.75" />
          <input
            className="mt-[0.7px] focus:outline-none text-gray-500 w-40 px-0.5 placeholder:text-gray-500 focus:placeholder:text-black"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-2">
          <LuUsers className="text-2xl mt-1" />
          <span className="font-semibold mt-0.75">My Account</span>
          <MdKeyboardArrowDown className="text-xl text-red-400 mt-1" />
        </div>
        <div className="relative inline-block">
          <FcRefresh className="text-3xl" />
          <span className="absolute -top-1 -right-1 text-xs bg-green-700 text-white border-2 border-white rounded-full w-4 h-4 flex items-center justify-center mt-0.5">
            0
          </span>
        </div>
        <div className="relative inline-block mx-1.5">
          <CiHeart className="text-3xl" />
          <span className="absolute -top-1 -right-1 text-xs bg-green-700 text-white border-2 border-white rounded-full w-4 h-4 flex items-center justify-center mt-0.5">
            0
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="relative inline-block">
            <RiShoppingBag3Line className="text-3xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-green-700 text-white border-2 border-white rounded-full w-4 h-4 flex items-center justify-center mt-0.5">
              0
            </span>
          </div>
          <div className="font-semibold">$0.00</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
