export default function Checkbox({text,value,onclick})
{        
    return(
            <label className=" mr-3 check-container">
                {text}
                    <input onClick= {onclick} type="radio"  name="category" value={value}/>
                    <span class="checkmark"></span>
                </label>
        )
};
