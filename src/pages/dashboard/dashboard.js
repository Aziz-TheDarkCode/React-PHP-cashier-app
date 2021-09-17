import { useEffect } from 'react'
import {AiOutlineDelete} from 'react-icons/all'
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import Bar from '../../components/bar/bar'
import Button from '../../components/button/button'
import Skeleton from '../../components/skeleton/skeleton'
import NewProduct from './addProduct/addProduct'
export default function Dashboard ({recipes,setRecipes,cart,setCart}){
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:3500/GET/Product/all-products.php').then(
                (res) => res.json()).then(
                    (data) => {
                        setRecipes(data)
              }).catch((err)=>{
                  console.log(err)
              })
           }, 1);    
       },[])
    return(
        <Router>

            <Route path="/dashboard">
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-larger text-bolder">Dashboard</p>
                <Link exact to="/newproduct">
                    <Button text="Ajouter un produit" type="primary"/>
                </Link>
            </div>

                <h3>Overview</h3>
                <h3 className="mt-5">List of product</h3>
                <div className="mt-2 d-flex align-items-center">
                    <p>Capacité :</p>
                    <div className=" px-4 d-flex align-items-center">
                        <div className="mr-1 p-1 little-square red"></div>
                        <p>Faible</p>
                    </div>
                    <div className=" px-4 d-flex align-items-center">
                        <div className="mr-1 p-1 little-square yellow"></div>
                        <p>Moyenne</p>
                    </div>
                    <div className=" px-4 d-flex align-items-center">
                        <div className="mr-1 p-1 little-square green"></div>
                        <p>Suffisante</p>
                    </div>
                </div>
                <table style={{borderSpacing:'20px'}} className="mt-3 col-12">
                <thead style={{textAlign:'left',padding:"230rem"}}>
                    <th>    </th>
                    <th>Designation</th>
                    <th>Price ( FCFA )</th>
                    <th>Quantity</th>
                </thead>
                <tbody>

                    {recipes.length !== 0 && recipes.map(prod=>{
                        return(
                            <tr className='p-5'>

                                <td className='pointer text-primary text-bolder'><AiOutlineDelete/></td>
                                <td>{prod.productName}</td>
                                <td>{prod.price}</td>
                                {prod.quantity <10 && prod.quantity<=20 && <Bar state='weak' value={prod.quantity}/>}
                                {prod.quantity >=21 && prod.quantity<=50 && prod.quantity && <Bar state='med' value={prod.quantity}/>}
                                {prod.quantity >=51 && <Bar state='sufficient' value={prod.quantity}/>}

                                
                            </tr>
                        )
                    }) }
                    {recipes.length===0 && 
                      <>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                        <tr>
                            <Skeleton/>
                        </tr>
                      </>
                    }
                     
                </tbody>
            </table>
            </Route>
           
                <Route path="/newproduct">
                  <NewProduct/>
                </Route>      
        </Router>
    )
}