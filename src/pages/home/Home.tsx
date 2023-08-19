import { useState } from "react";
import styles from "./Home.module.scss";
import { useSmoothScrollOnClick } from "../../utils";

export type User = {
    name: string;
    role: string;
}

export const Home = () => {
  const [showCursor, setShowCursor] = useState(true);

  const user: User = {
    name: 'Charrx',
    role: 'Software Engineer',
  }

  // Sets the interval for the cursor to blink
  setInterval(() => {
    // setShowCursor(!showCursor);
  }, 1000);

  return (
    <>
      <section id="home_page" className="w-full h-screen flex flex-col justify-center items-center gap-4 text-center">
        <span className="font-light text-sm md:text-md uppercase tracking-thicc">{user.role}</span>
        <span className="flex font-ginger font-light text-5xl md:text-7xl uppercase tracking-thicc">
          {user.name}
          <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-center w-1 md:w-2`}>
            |
          </span>
        </span>
        <a
          href="#about"
          className={styles.navigation_container}
          onClick={useSmoothScrollOnClick}
        >
          Explore
          <div className={styles.navigation_item}></div>
        </a>
      </section>
    </>
  );
};
