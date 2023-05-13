import { useSmoothScrollOnClick } from "../../utils";

interface NavBarProps {
  isOpen: boolean;
}

export const NavBar = (props: NavBarProps) => {
  const { isOpen } = props;
  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden"
      } w-full block md:flex md:items-center md:w-auto`}
    >
      <ul className="flex flex-col md:flex-row text-sm md:flex-grow">
        <li className="text-center">
          <a
            href="#about"
            onClick={useSmoothScrollOnClick}
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            _about
          </a>
        </li>

        <li className="text-center">
          <a
            href="#projects"
            onClick={useSmoothScrollOnClick}
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            _projects
          </a>
        </li>

        <li className="text-center">
          <a
            href="#contact"
            onClick={useSmoothScrollOnClick}
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            _contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
