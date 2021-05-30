import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import DisplayProducts from "./displayProducts";
import Cart from "./Cart";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Signin from "./Signin";
function Nav(props) {
    return (
        <Router>
            <div>
                <header className="App-header ps-5 pe-5">
                    <Link to="/">
                        <h2 className="text-white">Shop 2 <span className="ps-2 pe-2 pb-1 bg-light text-dark rounded-circle" id="r-color">R</span>eact</h2>
                    </Link>
                    <Link to="/shopCart">
                        <div className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <span className="ps-2"> {props.totalValue} items</span>
                        </div>
                    </Link>
                </header>
            </div>

            <Switch>
                <Route exact path="/">
                    <DisplayProducts products={props.products} onIncrement={props.onIncrement}
                        onDecrement={props.onDecrement} sortType={props.sortType} 
                        listNum={props.listNum}
                        onSort={props.onSort}
                    />
                </Route>
                <Route path="/shopCart">
                    <Cart prods={props.prods} totalValue={props.totalValue} />
                </Route>
                <Route path="/Signin">
                    <Signin prods={props.prods}/>
                </Route>
            </Switch>
        </Router>
        
    )
}

export default Nav;