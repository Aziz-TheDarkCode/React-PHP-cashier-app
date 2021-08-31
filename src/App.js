import { useState } from "react";
import Home from "./pages/home/home";

function App() {
    const [cart,setCart] = useState([])
  return (
    <Home  cart={cart} setCart={setCart}/>
  );
}

export default App;
