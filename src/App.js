import { useState } from "react";
import Capabilities from "./components/Capabilities";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const [navAnimation, setNavAnimation] = useState(false);

  return (
    <div className="App">
      <Navbar setNavAnimation={setNavAnimation} />
      <Home navAnimation={navAnimation} />
      <Products />
      <Capabilities />
      <Footer />
    </div>
  );
}

export default App;
