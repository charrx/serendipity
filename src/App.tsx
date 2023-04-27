import styles from "./App.module.scss";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className={styles.App}>
      <Home />
      <About />
    </div>
  );
};

export default App;
