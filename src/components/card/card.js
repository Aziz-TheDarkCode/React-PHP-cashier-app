import "./card.css"
export default function Card({image,title,price,cart,setCart}) 
{
    const addCart = ()=>{
     
        let filter = cart.filter(prod=>prod.name===title)
        if(filter.length===0)
        {      
        setCart([...cart,{
            "name" :title,
            "price" : price,
            "qty" : 1
        }])            
        }else
        {
            
        }
    }
    return(
        <div onClick={addCart} className="bg-white card p-4 rounded-box d-flex align-items-center justify-content-center flex-column">
            <div className=" bubble d-flex justify-content-center align-items-center flex-column">
                <img className='card--image' src={image} alt="produit"/>
            </div>
            <div className="mt-2">
                <h3>{title}</h3>
                <p className="gray-text mt-2">{price} FCFA</p>
            </div>
        </div>
    )    
}