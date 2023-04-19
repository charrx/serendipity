import styles from "./App.module.scss";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className={styles.App}>
      <Home />
    </div>
  );
};

export default App;
