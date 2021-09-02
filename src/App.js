import { useState } from "react";
import Aside from "./components/aside/aside";
import Invoice from "./components/invoice/invoice";
import Home from "./pages/home/home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Settings from "./pages/settings/settings";

function App() {
    const [cart,setCart] = useState([])
    const [recipes,setRecipes] = useState([])
  return (
    <Router>
      <div className="container page-content">
        <Aside cart={cart} setCart={setCart}/>
       <Switch>
          <Route  path="/dashboard">
              <Dashboard  cart={cart} setCart={setCart}/>
          </Route>
          <Route   path="/settings" >
              <Settings/>
          </Route>
          <Route path="/" >
              <Home recipes = {recipes}  setRecipes = {setRecipes}cart={cart} setCart={setCart}/>
          </Route>
       </Switch>
        <Invoice cart={cart} setCart={setCart}/>  
      </div>
    </Router>


  );
}

export default App;
