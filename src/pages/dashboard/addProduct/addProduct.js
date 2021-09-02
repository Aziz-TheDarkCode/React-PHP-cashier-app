import { useState } from "react";
import Button from "../../../components/button/button";
import Checkbox from "../../../components/input/checkbox";
import Fileinput from "../../../components/input/fileInput";
import Input from "../../../components/input/input";
import "./addProduct.css"
export default function NewProduct () 
{
    let [submittedData,setSubmittedData]=useState({})
    const handler = (e)=>{
        if(e.target.value!=='') {
            setSubmittedData({...submittedData,[e.target.name] : e.target.value})
            e.target.classList.remove("red-border")
        }else
        {
            e.target.classList.add("red-border")
            console.log("fill all field")
        }

    }
    return(
        <div>
            <p onClick={()=>{
                console.log(submittedData)
            }} className="mb-4">Ajout d'un produit</p>
            <div className='input__section'>
                <Input onblur={handler} name="productName" label="Designation"/>
                <Input  onblur={handler} name="price" label="Prix"/>
                <Input  onblur={handler}  name="quantity" label="Quantité" type="number"/>
                <Fileinput/>
            </div>
                <div className='mt-5'>
                <Checkbox onclick={handler} text="Pizza" value='1'/>
                <Checkbox onclick={handler} text="Burger" value='2'/>
                <Checkbox onclick={handler} text="Cafe" value='3'/>
                <Checkbox onclick={handler} text="Snack" value='9'/>
                <Checkbox onclick={handler} text="Glace" value='4'/>
                <Checkbox onclick={handler} text="Fruits" value='8'/>
                <Checkbox onclick={handler} text="Boisson" value='7'/>
                </div>
            <div className="mt-5 col-3 mx-auto">
                <Button  text="Ajouter" type="primary"/>
            </div>
        </div>
    )   
}