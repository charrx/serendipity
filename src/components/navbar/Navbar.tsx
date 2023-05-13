import { NavbarItem } from "./NavbarItem";

interface NavBarProps {
  isOpen: boolean;
}

const navBarItems = [
  {
    href: "#about",
    title: "_about",
  },
  {
    href: "#projects",
    title: "_projects",
  },
  {
    href: "#contact",
    title: "_contact",
  },
];

export const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden"
      } w-full block md:flex md:items-center md:w-auto`}
    >
      <ul className="flex flex-col md:flex-row text-sm md:flex-grow">
        {navBarItems.map((item, index) => {
          return <NavbarItem key={index} href={item.href} title={item.title} />;
        })}
      </ul>
    </nav>
  );
};
