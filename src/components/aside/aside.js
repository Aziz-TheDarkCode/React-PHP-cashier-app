import { AiOutlineShop,RiDashboardLine, AiOutlineSetting} from "react-icons/all"
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
                <NavLink  exact activeStyle={active} to="/">
                    <NavLinks icon={<AiOutlineShop/>} title="Acceil" state="active" type='type-1'/>
                </NavLink>
                <NavLink exact activeStyle={active} to="/dashboard">
                    <NavLinks icon={<RiDashboardLine/>} title="Dashboard" type='type-1'/>
                </NavLink>
                <NavLink exact activeStyle={active} to="/Settings">
                    <NavLinks icon={<AiOutlineSetting/>} title="Paramètres" type='type-1'/>   
                </NavLink>

               
    
            </div>        
    )
}