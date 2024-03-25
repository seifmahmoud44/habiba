import { useState } from "react";
import Capabilities from "./components/Capabilities";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [navAnimation, setNavAnimation] = useState(false);

  return (
    <div className="App">
      <Navbar setNavAnimation={setNavAnimation} />
      <Home navAnimation={navAnimation} />
      <Products />
      <Capabilities />
    </div>
  );
}

export default App;
