import "./card.css"
export default function Card({image,title,price,cart,setCart}) 
{
    const CheckCart = () =>{
       
    }
    const addCart = ()=>{
        let product = {
            "name" :title,
            "price" : price,
            "qty" : 1
        }
        cart.forEach(el => {
            el ?  console.log() :  console.log("the cart is empty")   
            if(el.name===title)
            {
               console.log("already exist !")
            }else
            {
                console.log("new item !")
            }   
        });
        return product 
    }
    return(
        <div onClick={()=>{
            setCart([...cart,addCart()])
        }} className="bg-white card p-4 rounded-box d-flex align-items-center justify-content-center flex-column">
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