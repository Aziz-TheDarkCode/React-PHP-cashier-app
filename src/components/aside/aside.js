import { AiOutlineShop,AiOutlineMessage, AiOutlineSetting } from "react-icons/ai"
import NavLinks from "../navlinks/navLinks"
import "./aside.css"

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
export default function Aside() {
    return(
        <Router>
            <div className="bg-white aside p-3">
                <NavLinks icon={<AiOutlineShop/>} title="Acceil" state="active" type='type-1'/>
                <NavLinks icon={<AiOutlineMessage/>} title="Message" type='type-1'/>
                <NavLinks icon={<AiOutlineSetting/>} title="Paramètres" type='type-1'/>
    
            </div>
            
        </Router>
    )
}