import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavBar } from "../navbar/Navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-12 mx-10 md:mx-20">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white">
          <span className="tracking-widest">{"</>"}</span>
        </div>

        <div className="block md:hidden">
          <button
            className="flex items-center hover:text-white"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3BottomRightIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <NavBar isOpen={isOpen} />
      </div>
    </header>
  );
};
