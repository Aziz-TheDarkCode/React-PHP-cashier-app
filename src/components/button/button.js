import "./button.css"
export default function Button({text,type}) 
{
    return(
        <div className={`btn btn-${type}`}>{text}</div>
    )    
}