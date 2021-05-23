/* eslint-disable array-callback-return */
import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart(props) {
    const { prods = [] } = props
    return (
        <div className="block">
            <h2>You have added these items...</h2>
            {/* <Button variant="primary">CheckOut</Button>{' '} */}

            {prods.map((prod) => {
                if (prod.value > 0) {
                    return (
                        <div className="border d-flex align-items-start">
                            <img src={prod.image} alt={prod.desc} width='150' />
                            <p className="qty d-inline mx-5 justify-content-center">{prod.value} Quantity Selected</p>
                            <p className="px-4">{prod.desc}</p>
                        </div>
                    )
                }
            })}
            <CheckoutButton totalValue={props.totalValue}/>
        </div>
        
    );
}

let CheckoutButton = ({totalValue}) => {
    return (
        totalValue > 0 ?
        <Link to="/Signin">
            <Button className="mt-4">Check Out</Button>
        </Link>
        :
        <React.Fragment>
            <h4>There are {totalValue} items in your cart.</h4>
            <Link to="/">
                <Button className="mt-4 bg-success">? ContinueShopping ?</Button>
            </Link>
        </React.Fragment>
    )
}