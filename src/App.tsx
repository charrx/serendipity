import styles from "./App.module.scss";
import { About, Home } from "./pages";

const App = () => {
  return (
    <div className={styles.App}>
      <Home />
      <About />
    </div>
  );
};

export default App;
