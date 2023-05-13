import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavBar } from "../navbar/Navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="tracking-widest">{"<charrx />"}</span>
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
    </header>
  );
};
