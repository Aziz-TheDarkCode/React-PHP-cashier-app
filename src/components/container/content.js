import "./content.css"
import {FaHamburger,IoPizzaOutline,IoIceCreamOutline,AiOutlineCoffee,BiDrink,GiFruitBowl,GiChipsBag,IoFastFoodOutline   } from "react-icons/all"
import Category from "../navlinks/category"
import Card from "../card/card" 
import "../card/card.css"
import { useEffect, useState } from "react"

export default function Container({cart,setCart}) {
    
    let [recipes,setRecipes] = useState([])
    let [filteredRecipes,setFilteredRecipes] = useState([])
   useEffect(()=>{
    fetch('./recipe.json').then(
        (res) => res.json()).then(
            (data) => {
                setRecipes(data.menu)
                setFilteredRecipes(data.menu)
      }).catch(()=>{
          console.log("Unknown error !")
      })
   },[])
    return(
        <div className='content p-4'>
            <header className="d-flex justify-content-between align-items-center">
                <div className="text-larger">
                    <span className="text-bolder">Menu</span>
                    <span> De commande</span>
                </div>
                <input type = "text" placeholder="Rechercher des aliments , du café...."/>
            </header>
            <div className="d-flex categories py-3">
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<IoFastFoodOutline/>}  title="Tout"/>
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<IoPizzaOutline/>}  title="Pizza"/>
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<FaHamburger/>} title="Burger"/>
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<AiOutlineCoffee/>} title="Café"/>
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<IoIceCreamOutline/>}  title="Glace" />
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<BiDrink/>}  title="Boisson" />
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<GiFruitBowl/>}  title="Fruits"/>
                 <Category recipes={recipes} setRecipes={setRecipes} filteredRrecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} icon={<GiChipsBag/>}  title="Snack" />
            </div>
            <section className="mt-4">
                <h1 className="card__section--title mb-3">Produits</h1>
                <div className="card__section">
                  { filteredRecipes.length===0 && recipes.map(recipe=>{
                       return <Card cart={cart} setCart={setCart} image={recipe.img} title={recipe.name} price={recipe.price}/>
                  })}
                  {filteredRecipes!=0  && filteredRecipes.map(filteredRecipe=>{
                    return <Card cart={cart} setCart={setCart} image={filteredRecipe.img} title={filteredRecipe.name} price={filteredRecipe.price}/>
                  })}
                </div>
            </section>
        </div>
    )
}