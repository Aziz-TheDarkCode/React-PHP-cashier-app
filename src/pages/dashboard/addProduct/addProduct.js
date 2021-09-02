import Button from "../../../components/button/button";
import Fileinput from "../../../components/input/fileInput";
import Input from "../../../components/input/input";
import "./addProduct.css"
export default function NewProduct () 
{
    return(
        <div>
            <p className="mb-4">Ajout d'un produit</p>
            <div className='input__section'>
                <Input label="Designation"/>
                <Input label="Prix"/>
                <Input label="Nom du produit"/>
                <Input label="Quantité" type="number"/>
                <Fileinput/>
            </div>
                <div className='mt-5'>
                <label className=" mr-3 check-container">
                    Pizza
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label className=" mr-3 check-container">
                    Burger
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label className=" mr-3 check-container">
                   Glace
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label className=" mr-3 check-container">
                    Snack
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label className=" mr-3 check-container">
                   Boisson
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label className=" mr-3 check-container">
                    Pizza
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label className=" mr-3 check-container">
                    Cafe
                    <input type="radio"  name="radio"/>
                    <span class="checkmark"></span>
                </label>
                </div>
            <div className="mt-5 col-3 mx-auto">
                <Button text="Ajouter" type="primary"/>
            </div>
        </div>
    )   
}