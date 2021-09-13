import { AiOutlineShop,RiDashboardLine, AiOutlineSetting,BiHistory} from "react-icons/all"
import NavLinks from "../navlinks/navLinks"
import "./aside.css"
import {NavLink} from "react-router-dom";

let active = {
        fontWeight: "bold",
        color: "#ff265d",  
        backgroundColor:"pink"  
  }
export default function Aside() {
    return(
            <div className="bg-white aside p-3">
                <div>
                    <NavLink  exact activeStyle={active} to="/">
                        <NavLinks icon={<AiOutlineShop/>} title="Acceuil"  type='type-1'/>
                    </NavLink>
                    <NavLink exact activeStyle={active} to="/dashboard">
                        <NavLinks icon={<RiDashboardLine/>} title="Dashboard" type='type-1'/>
                    </NavLink>
                    <NavLink exact activeStyle={active} to="/Settings">
                        <NavLinks icon={<AiOutlineSetting/>} title="Paramètres" type='type-1'/>   
                    </NavLink>
                    <NavLink exact activeStyle={active} to="/s">
                        <NavLinks icon={<BiHistory/>} title="Historique" type='type-1'/>   
                    </NavLink>
                </div>

                <div className='text-center'>
                <img src="https://i3.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-1.png?w=1600" width="60px" className="rounded-box"/>      
                <h4 className="black-text">Administrateur</h4>
                </div>
            </div>        
    )
}