import styles from "./App.module.scss";
import { Header } from "./components";
import { About, Home } from "./pages";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;
