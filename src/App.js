import './App.css';
import Nav from "./Header";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./Products"
import DisplayProducts from "./displayProducts"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products      
    }
  }

  onIncrement = (addvalue) => {
    if(addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({updatedValue});
    }
  }
  onDecrement = (decvalue) => {
    if(decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({updatedValue});
    }
  }
  render() {
    return (
      {}, 
      (
        <div className="App">
          <Nav totalValue={this.state.products
              .map((prod) => prod.id)
                .reduce((acc, curr, index) => acc + curr, 0)}
            prods={this.state.products}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement} />
          <DisplayProducts products={this.state.products} onIncrement={this.onIncrement}
            onDecrement={this.onDecrement} />
        </div>
      )
    )
  }
}

export default App;
