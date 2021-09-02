import "./input.css"

export default function Input({label,placeholder,type,name,onblur}) 
{
    return(
        <div className=" input d-flex flex-column gray-text">
            <label className="py-2 ml-2">{label}</label>
            <input  onBlur={onblur} name={name} type={type} className="input-text" placeholder={placeholder}/>
        </div>
    )    
}