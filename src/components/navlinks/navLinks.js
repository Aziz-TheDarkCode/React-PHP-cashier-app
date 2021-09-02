
// import { useState } from "react";
export  default function NavLinks({icon,title,state}) 
{
    return(
        <div className='links rounded-box type-1 d-flex justify-content-center align-items-center flex-column'>
            <p className="medium">{icon}</p>
            <p>{title}</p>
        </div>
    )    
}