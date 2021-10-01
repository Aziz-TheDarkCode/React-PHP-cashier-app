export default function Checkbox({text,value,onclick,name})
{        
    return(
            <label className=" mr-3 check-container">
                {text}
                    <input onClick= {onclick} type="radio"  name={name} value={value}/>
                    <span class="checkmark"></span>
                </label>
        )
};
