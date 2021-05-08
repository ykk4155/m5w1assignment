import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0
        },
        {
          id: 2,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0
        },
        {
          id: 3,
          image: './products/mug.jpg', 
          desc: 'Unique Mug',
          value: 0
        },
        {
          id: 4,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header ps-5 pe-5">
          <h2>Shop to React</h2>
          <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="ps-2"> 0 items</span>
          </div>
        </header>
        <ShowItem items={this.state.items} />
      </div>
    )
  }
}

function ShowItem(props) {
  return (
    <div>
      {props.items.map(item => {
        return (
          <div className="card" key={item.id}>
            <h5 className="text-start mt-4 ms-5 me-4 mb-2">{item.desc}</h5>
            <div className="row p-2 align-middle">
              <img alt={item.desc} src={item.image} width="80px" className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2" />
              <p className="col-sm-6 col-md-8 align-self-center text-start">
                <span className="border border-2 p-3">{item.value}</span>Quantity</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default App;