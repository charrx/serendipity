import { Header } from "./components";
import { About, Home } from "./pages";

const App = () => {
  return (
    <div className="w-full h-full min-h-full px-20">
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;
