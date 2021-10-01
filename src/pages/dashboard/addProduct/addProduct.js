import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../components/button/button";
import Checkbox from "../../../components/input/checkbox";
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
    const submit =()=>{

        console.log(submittedData)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submittedData)
        };
        fetch("http://localhost/cashier-app/src/Api/POST/Product/add-product.php", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        document.querySelector(".modal-content").style.display="flex"
    }

    return(
        <div>
          
            <Link to="/dashboard">
            <MdKeyboardArrowLeft className="text-larger"/>
            </Link>
            <h3 onClick={()=>{
                console.log(submittedData)
            }} className="mt-2">Ajout d'un produit</h3>
            <div className='input__section'>
                <Input onblur={handler} name="productName" label="Designation"/>
                <Input  onblur={handler} name="price" label="Prix"/>
                <Input  onblur={handler}  name="quantity" label="Quantité" type="number"/>
                <Input  onblur={handler}  name="img" label="Url de l'image" type="text"/>
                
            </div>
                <div className='mt-5'>
                <Checkbox  name='category' onclick={handler} text="Pizza" value='1'/>
                <Checkbox  name='category' onclick={handler} text="Burger" value='2'/>
                <Checkbox  name='category' onclick={handler} text="Cafe" value='3'/>
                <Checkbox  name='category' onclick={handler} text="Snack" value='9'/>
                <Checkbox  name='category' onclick={handler} text="Glace" value='4'/>
                <Checkbox  name='category' onclick={handler} text="Fruits" value='8'/>
                <Checkbox  name='category' onclick={handler} text="Boisson" value='7'/>
                </div>
            <div className="mt-5 col-3 mx-auto">
                <Button onclick={submit} text="Ajouter" type="primary"/>
            </div>
        </div>
    )   
}