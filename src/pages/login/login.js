import { useState } from 'react'
import Button from '../../components/button/button'
import Checkbox from '../../components/input/checkbox'
import Input from '../../components/input/input'
import './login.css'
export default function Login(){
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
        <>
        <div className="login-section">
              <div className=" d-flex flex-column justify-content-center p-3">
              <h2>Connexion</h2>
                    <div>
                        <div className='py-4'>
                        <Input onblur={handler} name="name"  placeholder="Enter votre Nom"/>    
                        </div>
                        <div className='py-4'>
                        <Input onblur={handler} name="password"  placeholder="Enter votre mot de passe" type="password"/>
                        </div>
                        <div className='py-4'>
                        <Checkbox text="Se souvenir de moi"/>
                        </div>
                        <div className='py-4 col-6 mx-auto'>         
                        <Button onclick={()=>{
                            console.log(submittedData)
                        }} text="Gnou Dem !!" type="primary"/>
                        </div>
                    </div>
                </div>
            <div className="d-flex flex-column justify-content-center p-4 h-100 bg-primary">
                <h1 className=''>BIENVENU SUR LE DARKCODE</h1>
                <h3 className='py-1 mb-3'>Pizzeria - Salon de Thé - Patisserie - Fast Food</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        </>
    )
}