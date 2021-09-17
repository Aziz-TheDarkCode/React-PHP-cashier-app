import { useState } from "react";
import Home from "./pages/home/home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Settings from "./pages/settings/settings";
import Modal from "./components/modal/modal";
import Login from "./pages/login/login";
import Aside from "./components/aside/aside";
import Invoice from "./components/invoice/invoice";
import History from "./pages/history/history";

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
         <div className="container page-content">
              <Aside cart={cart} setCart={setCart}/> 
             <div className='content p-4'>
                <Route  path="/dashboard">
                    <Dashboard  cart={cart} setCart={setCart} recipes={recipes} setRecipes={setRecipes}/>
                </Route>  
              <Route  path="/history">
                    <History/>
              </Route>  
                <Route   path="/settings" >
                    <Settings cart={cart} setCart={setCart}/>
                </Route>
                <Route exact path="/" >
                    <Home filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} recipes = {recipes}  setRecipes = {setRecipes} cart={cart} setCart={setCart}/>
                </Route>
             </div>
              <Invoice cart={cart} setCart={setCart}/> 
         </div>
          
       </Switch>
   
    </Router>


  );
}

export default App;
