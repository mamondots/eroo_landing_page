import { useState } from "react";
import { useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setChangeColor(location.pathname !== "/");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90 || location.pathname !== "/")
        setChangeColor(true);
      else setChangeColor(false);
    });
  }, [location.pathname]);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className={`lg:px-40 md:px-28 sm:px-18 px-12 py-6 absolute top-0 duration-300 z-10 w-full bg-[#ffffff19] ${changeColor ? "bg-white shadow-md"
              : ""
        }`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl font-bold  ${
              changeColor ? "text-[#262626]"
              : "text-white"
            }`}>MamonDots</h2>
          </div>
          <div>
            <ul className={`lg:flex hidden items-center justify-center space-x-12 capitalize font-medium cursor-pointer 
            ${
              changeColor ? "text-[#262626]"
              : "text-white"
            }`}>
              <li className="hover:text-[#CDB30C] duration-300"><a href="">home</a></li>
              <li className="hover:text-[#CDB30C] duration-300"><a href="">about</a></li>
              <li className="hover:text-[#CDB30C] duration-300"><a href="">portfolio</a></li>
              <li className="hover:text-[#CDB30C] duration-300"><a href="">services</a></li>
              <li className="hover:text-[#CDB30C] duration-300"><a href="">pricing</a></li>
              <li className="hover:text-[#CDB30C] duration-300"><a href="">contact</a></li>
            </ul>
          </div>

          <div className="lg:hidden">
            <h2 className={`text-xl py-1 px-1 border cursor-pointer  hover:bg-[#CDB30C] hover:text-[#262626] hover:border-transparent duration-300 ${
              changeColor ?"text-[#262626]":"text-[#fff]"
            }`}><MdMenu /></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;