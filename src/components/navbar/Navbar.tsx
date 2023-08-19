import { NavbarItem } from "./NavbarItem";

interface NavBarProps {
  isOpen: boolean;
}

type NavbarItem = {
  href: string;
  title: string;
};

const navBarItems: NavbarItem[] = [
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
      } w-full block mt-4 md:mt-0 md:flex md:items-center md:w-auto`}
    >
      <ul className="flex flex-col gap-4 text-md md:flex-row md:text-xs md:flex-grow">
        {navBarItems.map((item, index) => {
          return <NavbarItem key={index} href={item.href} title={item.title} />;
        })}
      </ul>
    </nav>
  );
};
