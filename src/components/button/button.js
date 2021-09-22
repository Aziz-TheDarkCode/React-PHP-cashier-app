import "./button.css"
export default function Button({text,type,onclick}) 
{
    return(
        <div onClick={onclick} className={`btn btn-${type}`}>{text}</div>
    )    
}