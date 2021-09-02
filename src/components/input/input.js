import "./input.css"

export default function Input({label,placeholder,type}) 
{
    return(
        <div className="d-flex flex-column gray-text">
            <label className="py-2 ml-2">{label}</label>
            <input type={type} className="input-text" placeholder={placeholder}/>
        </div>
    )    
}