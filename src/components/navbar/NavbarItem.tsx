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
        className="block md:inline-block text-gray-300 hover:text-white"
      >
        {title}
      </a>
    </li>
  );
};
