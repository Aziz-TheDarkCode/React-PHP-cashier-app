import { useEffect, useState } from "react"
import "./invoice.css"
export default function Invoice({cart,setCart}) {
    let sum = cart.reduce((arr,prod)=>{
        arr.push(prod.price)
        return arr
    },[]).reduce((total,n)=>{
        return total+=n
    },0)
            console.log(sum)
    return(
        <div className='bg-white invoice pos-relative'>
            <div className='text-center py-3'>
            <h3>Restaurant Le Darkcode</h3>
            <small >Dakar,Cité Douanes</small>
            </div>
            <p></p>
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
                            <tr>
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
            <h3 className='mt-2 gray-text'>{sum} FCFA</h3>
            </div>
            <p className='text-center'>Merci de votre visite et a bientot !</p>
            <div  onClick={()=>{
                setTimeout(() => {
                    setCart([])
                }, 1000);
                
            }}className="btn pos-absolute">
                <h4>Imprimer Facture</h4>
            </div>
        </div>
    )
}