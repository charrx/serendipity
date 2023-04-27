import { useSmoothScrollOnClick } from "../../utils/useSmoothScrollOnClick";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <header className={styles.navbar_container}>
      <a href="#home_page" onClick={useSmoothScrollOnClick}>
        <span className={styles.logo}>{"<charrx />"}</span>
      </a>
      <div className={styles.link_container}>
        <a href="#about" onClick={useSmoothScrollOnClick}>
          about
        </a>
        <a href="#projects" onClick={useSmoothScrollOnClick}>projects</a>
        <a href="#contact" onClick={useSmoothScrollOnClick}>contact</a>
      </div>
    </header>
  );
};

export default NavBar;
