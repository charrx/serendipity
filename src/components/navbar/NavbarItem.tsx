import { useSmoothScrollOnClick } from "../../utils";

interface NavbarItemProps {
  href: string;
  title: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ href, title }) => {
  return (
    <li className="text-center">
      <a
        href={href}
        onClick={useSmoothScrollOnClick}
        className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
      >
        {title}
      </a>
    </li>
  );
};
