import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../components/button/button";
import NewCashier from "./addCashier/cashier";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Skeleton from "../../components/skeleton/skeleton";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import deleteRow from "../../utils";
export default function Settings({cart,setCart}) 
{
    const [cashiers,setCashiers] = useState([])
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost/cashier-app/src/Api/GET/users/all-users.php').then(
                (res) => res.json()).then(
                    (data) => {
                        setCashiers(data)
                        console.log(data)
              }).catch((err)=>{
                  console.log(err)
              })
           }, 1);    
       },[])
    return(
        <Router>
            <Route path="/settings">
            <p className="text-larger text-bolder mb-3">Paramètres</p>
            <div className="bg-white p-3 rounded-box">
                <h3>Information sur l'utilisateur</h3>
            <div className ="d-flex align-items-center">
                <img src="https://i3.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-1.png?w=1600" width="100px" className="rounded-box"/>
                <div>
                    <div className="py-1">
                        <span className='text-bolder'>ID : </span>
                        <span>00231</span>
                    </div>
                    <div className="py-1">
                        <span className='text-bolder'>Nom : </span>
                        <span>Abdou Aziz</span>
                    </div>
                    <div className="py-1">
                        <span className='text-bolder'>Status : </span>
                        <span className="text-primary">Admin</span>
                    </div>                   
                </div>
            </div>             
            </div>
            <div className="bg-white p-3 mt-4 rounded-box">
                <h3>Liste des caissiers</h3>
        <table style={{borderSpacing:'20px'}} className="mt-3 col-12">
                <thead style={{textAlign:'left',padding:"230rem"}}>
                    <th></th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Statut</th>
                </thead>
                <tbody>
                {cashiers.length !== 0 && cashiers.map(cashier=>{
                        return(
                            <tr className='p-5'>

                                <td onClick={deleteRow} className='pointer text-primary text-bolder deleteIcon'><AiOutlineDelete/></td>
                                <td>{cashier.userID}</td>
                                <td>{cashier.users}</td>
                                {cashier.status==0 && <td>Caissier</td>}
                                {cashier.status==1 && <td>Admin</td>}
                            </tr>
                        )
                    }) }
                    {cashiers.length===0 && 
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
            <Link to='/new-cashier'>
            <div className='col-3 mt-3'>
                <Button text="Nouveau caissier" type='primary' />
            </div>
            </Link>
        </div>
            </Route>
            <Route path="/new-cashier">
                <NewCashier/>
            </Route>
        </Router>
    )    
}