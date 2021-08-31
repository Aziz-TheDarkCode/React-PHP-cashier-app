
// import { useState } from "react";
export  default function NavLinks({icon,title,state}) 
{
    return(
        <div onClick={(e)=>{ 
            document.querySelectorAll(".links").forEach(link => {
                link.classList.remove("active")
            });
            e.currentTarget.classList.add("active")
        }} className='links rounded-box type-1 d-flex justify-content-center align-items-center flex-column'>
            <p className="medium">{icon}</p>
            <p>{title}</p>
        </div>
    )    
}