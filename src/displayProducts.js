import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DisplayProducts(props) {
    const {products = []} = props
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    }

    return (
        <div>
            {products.map(product => {
                return (
                    <div className="card" key={product.id}>
                        <h4 className="text-start mt-4 ms-5 me-4 mb-2">{product.desc}</h4>
                            <div className="row p-2 align-middle">
                            <Button variant="" className="w-25" onClick={() => setShow(true)}>
                                <img alt={product.desc} src={product.image} width="50px" className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2"
                                onClick={() => handleShow(product)} />
                            </Button>
                                <p className="col-sm-6 col-md-8 align-self-center text-start">
                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(product)}> 
                                    <FontAwesomeIcon className="me-1" icon={faMinusCircle} /></button>
                                    <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(product)}>
                                    <FontAwesomeIcon className="me-1" icon={faPlusCircle} />
                                </button>
                            <span className="p-3">{product.value}</span>Quantity Selected</p>
                        </div>
                    </div>
                )
            })}

    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
                    <Modal.Title id="">{showImge.desc}
                    </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <img alt={showImge.desc} src={showImge.image} width="300px" className="mx-5" />
                    <p>Rating: {showImge.ratings}/ 5</p>
            </Modal.Body>
    </Modal>
</div>
    )
}
export default DisplayProducts;