import { BiCheckDouble } from "react-icons/bi"
import { Redirect } from "react-router"
import Button from "../button/button"
import "./modal.css"
export default function Modal (){
    return(
        <div onClick={(e)=>{
            e.target.style.display="none"
        }} className="justify-content-center align-items-center flex-column modal-content">
            <div className='p-3 modal text-center rounded-box'>
            <BiCheckDouble className='text-primary text-x-larger'/>
            <h2 className='mb-5'>Votre produit a été ajouté</h2>  
            <Button onclick={()=>{
                  document.querySelector(".modal-content").style.display="none"
                  window.location.replace("/")
            }} text='Ok' type="primary"/>  
            </div>
        </div>
    )
}