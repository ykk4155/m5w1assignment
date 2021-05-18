/* eslint-disable array-callback-return */
import React from "react";

export default function Cart (props) {
    const {prods = []} = props
    return (
        <div className="block">
            <h2>You have added these items...</h2>
                {prods.map((prod) => {
                if(prod.value > 0) {
                    return (
                        <div className="border d-flex align-items-start">
                            <img src={prod.image} alt={prod.desc} width='150' />
                            <p className="qty d-inline mx-5 justify-content-center">{prod.value} Quantity Selected</p>
                            <p className="px-4">{prod.desc}</p>
                        </div>
                    )
                }
            })}
        </div>
    );
}