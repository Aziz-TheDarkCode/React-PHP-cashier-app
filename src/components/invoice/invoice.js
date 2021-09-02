import { useEffect, useState,} from "react"
import Button from "../button/button"
import "./invoice.css"
export default function Invoice({cart,setCart}) {
    let [totalPrice,setTotalPrice]=useState(0)
    
    let amount = ()=>{
        let sum = cart.reduce((arr,prod)=>{
            arr.push(prod.price)
            return arr
        },[]).reduce((total,n)=>{
            return total+=n
        },0)
        console.log(sum)
        return sum
    }
    useEffect(()=>{
    //    cart.length===0 ? document.querySelector(".btn").style.display="none"  : document.querySelector(".btn").style.display="block"       
        amount()
       setTotalPrice(amount())
    },[amount()])     
             return(
        <div className='bg-white invoice pos-relative'>
             { cart.length!==0 &&   <div>
           <div className='text-center py-3'>
            <h3>Restaurant Le Darkcode</h3>
            <small >Dakar,Cité Douanes</small>
            </div>
            <p>Date : </p>
            <table className="mt-3 col-12 text-center bordered-bottom">
                <thead>
                    <th>#</th>
                    <th>Designation</th>
                    <th>Qty</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {cart.map(prod=>{
                        return(
                            <tr className='p-5'>
                                <td>002101</td>
                                <td>{prod.name}</td>
                                <td>{prod.qty}</td>
                                <td>{prod.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="p-2 d-flex align-items-center justify-content-between">
            <h2>Total</h2>
            <h3 className='mt-2 gray-text'>{totalPrice} FCFA</h3>
            </div>
            <div className="btn mt-5 mx-auto">
                <Button type="primary" text="Imprimer facture"/>
            </div>
           </div>}
             { cart.length===0 &&  <div className="gray-text d-flex align-items-center justify-content-center h-100"><p>Le panier est vide</p></div>}
 
            
        </div>
    )
}
