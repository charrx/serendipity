import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components";
import { About, Home } from "./pages";

const App = () => {
  return (
    <div className="px-10 md:px-20">
      <Header />
      <Home />
      <About />
      <Analytics />
    </div>
  );
};

export default App;
