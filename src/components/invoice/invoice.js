import { useEffect, useState,} from "react"
import { FaBroom } from "react-icons/fa"
import Button from "../button/button"
import "./invoice.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';

export default function Invoice({cart,setCart}) {
    let [totalPrice,setTotalPrice]=useState(0)
    let [count,setCounter]=useState(1)
    let [saleHistory,setSaleHistory]=useState([])

    // Business Logic 

    let notif = ()=> toast("Achat Validé avec succès ✔️ !")

    let print = (e) =>{
            setCounter(count + 1)
            htmlToImage.toPng(document.querySelector(".invoice"))
            .then((dataUrl)=>{
                var link = document.createElement('a');
                link.download = `facture numero ${count}`;
                link.href = dataUrl;
                link.click();
                setCart([])
            })

            //Notification             
            notif()

            //Hide some elements
            e.target.style.display = 'none'
            document.querySelector(".cart-cleaner").style.display = 'none'
            // setSaleHistory(saleHistory=>[...saleHistory,cartr])
            console.log(saleHistory)
        }   
    let amount = ()=>{
        let sum = cart.reduce((arr,prod)=>{
            arr.push(prod.price)
            return arr
        },[]).reduce((total,n)=>{
            return total+=n
        },0)
        return sum
    }
    useEffect(()=>{
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
            <div  onClick={()=>{
                setCart([])
            }} className=' pointer d-flex align-items-center text-secondary'>
            <div className="cart-cleaner">
                <FaBroom  className=" mr-1 p-1 sm-circular-box bg-secondary"/>
                <small>Vider panier</small>
            </div>
            </div>
            <table style={{borderSpacing:"10px"}} className="mt-3 col-12 text-center bordered-bottom">
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
                <Button onclick={print} type="primary" text="Valider et imprimer facture"/>
            </div>
           </div>}
             { cart.length===0 && <div className=" text-center gray-text d-flex align-items-center justify-content-center h-100"><p>Merci d'ajouter des produits pour voir la facture</p></div>
             }
         <ToastContainer hideProgressBar={true} autoClose={1000} />     
        </div>
        
    )
}
