import { AiOutlineDelete } from "react-icons/ai";
import Aside from "../../components/aside/aside";
import Button from "../../components/button/button";
import Invoice from "../../components/invoice/invoice";

export default function Settings({cart,setCart}) 
{
    return(
        <div class="container page-content">
        <Aside/>
        <div className="content p-4">
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
                    <th>Date d'arrivée</th>
                </thead>
                <tbody>
                <tr className='p-5'>
                    <td className="text-primary text-bolder"><AiOutlineDelete/></td>
                    <td className="text-bolder">00246</td>
                    <td>Samba Tine</td>
                    <td>20-06-2020</td>
                </tr>
                <tr className='p-5'>
                    <td className="text-primary text-bolder"><AiOutlineDelete/></td>
                    <td className="text-bolder">00246</td>
                    <td>Abdallah Ndiaye</td>
                    <td>20-06-2021</td>
                </tr>
                <tr className='p-5'>
                    <td className="text-primary text-bolder"><AiOutlineDelete/></td>
                    <td className="text-bolder">00246</td>
                    <td>Salimata Gueye</td>
                    <td>20-06-2021</td>
                </tr>
                <tr className='p-5'>
                    <td className="text-primary text-bolder"><AiOutlineDelete/></td>
                    <td className="text-bolder">00246</td>
                    <td>Ibrahima Ndir</td>
                    <td>20-06-2021</td>
                </tr>
                </tbody>
            </table>
            <div className='col-3 mt-3'>
            <Button text="Nouveau caissier" type='primary' />
            </div>
        </div>
        </div>
        <Invoice cart={cart} setCart={setCart}/> 
        </div>
    )    
}