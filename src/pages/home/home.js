import Aside from "../../components/aside/aside";
import Invoice from "../../components/invoice/invoice";
import Container from "../../components/container/content";
import "./home.css"
export default function Home({cart,setCart}) {
    return(
        <div className="container page-content">
            <Aside/>
            <Container cart={cart} setCart={setCart}/>
            <Invoice cart={cart} setCart={setCart}/>
        </div>
    )
}