import "./input.css"

export default function Input({label,placeholder,type,name,onblur,onkeyup,size}) 
{
    return(
        <div className=" input d-flex flex-column gray-text">
            <label className="py-2 ml-2">{label}</label>
            <input  onKeyUp={onkeyup} onBlur={onblur} name={name} type={type} className={`${size} input-text`} placeholder={placeholder}/>
        </div>
    )    
}