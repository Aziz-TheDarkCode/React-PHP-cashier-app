
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../components/button/button";
import Checkbox from "../../../components/input/checkbox";
import Input from "../../../components/input/input";
import './cashier.css'

export default function NewCashier () 
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
        fetch("http://localhost/cashier-app/src/Api/POST/users/add-users.php", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        document.querySelector(".modal-content h2").style.textContent="Un nouveau caissier a ajouté "
        document.querySelector(".modal-content").style.display="flex"
    }

    return(
        <>
            <Link to="/settings">
            <MdKeyboardArrowLeft className="text-larger"/>
            </Link>
            <h3 onClick={()=>{
                console.log(submittedData)
            }} className="mt-2">Ajout d'un caissier</h3>
            <div className='input__section'>
                <Input onblur={handler} name="name" label="Nom Complet"/>
                <Input  onblur={handler} name="password" label="Mot De Passe" type="password"/>            
            </div>
                <div className='mt-5'>
                <Checkbox name='status' onclick={handler} text="Admin" value='1'/>
                <Checkbox name='status' onclick={handler} text="User" value='0'/>
                </div>
            <div className="mt-5 col-3 mx-auto">
                <Button onclick={submit} text="Ajouter" type="primary"/>
            </div>
        </>
    )   
}