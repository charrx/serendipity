import { useState } from "react";
import styles from "./Home.module.scss";
import { useSmoothScrollOnClick } from "../../utils";

export const Home = () => {
  const [showCursor, setShowCursor] = useState(true);

  // Sets the interval for the cursor to blink
  setInterval(() => {
    setShowCursor(!showCursor);
  }, 1000);

  return (
    <>
      <section id="home_page" className={styles.home_container}>
        <span className={styles.jobTitle}>Software Engineer</span>
        <span className={styles.devName}>
          Charrx
          <span className={showCursor ? styles.showCursor : styles.hideCursor}>
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
