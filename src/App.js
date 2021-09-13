import { useState } from "react";
import Home from "./pages/home/home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Settings from "./pages/settings/settings";
import Modal from "./components/modal/modal";
import Login from "./pages/login/login";

function App() {

  let [filteredRecipes,setFilteredRecipes] = useState([])
    const [cart,setCart] = useState([])
    const [recipes,setRecipes] = useState([])
  return (
    <Router>
      <Modal/>
       <Switch>
          <Route path="/Login" >
              <Login/>
          </Route>
          <Route  path="/dashboard">
              <Dashboard  cart={cart} setCart={setCart} recipes={recipes} setRecipes={setRecipes}/>
          </Route>  
          <Route   path="/settings" >
              <Settings cart={cart} setCart={setCart}/>
          </Route>
          <Route path="" >
              <Home filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} recipes = {recipes}  setRecipes = {setRecipes} cart={cart} setCart={setCart}/>
          </Route>
       </Switch>
   
    </Router>


  );
}

export default App;
