import {GrAdd} from 'react-icons/gr'
import {BrowserRouter as Router, Route,NavLink, Link} from 'react-router-dom'
import Button from '../../components/button/button'
import NewProduct from './addProduct/addProduct'
export default function Message (){
    return(
        <Router>
        <div className="content p-4">
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-larger text-bolder">Dashboard</p>
                <Link to="/newproduct">
                    <Button text="Ajouter un produit" type="primary"/>
                </Link>
            </div>
              <Route path="/newproduct">
                  <NewProduct/>
              </Route>  
        </div>
        </Router>
    )
}