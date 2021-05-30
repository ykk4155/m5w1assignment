import './App.css';
import Nav from "./Header";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./Products"
// import DisplayProducts from "./displayProducts";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      sortType: "",
      listNum: "" ,
    }
  }

   onSort = (listNum, sortType) => {
    switch (sortType) {
      case "def":
        listNum.sort((a, b) => {
          return a.id - b.id;
        });
        break;
      case "desc":
        listNum.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "asc":
        listNum.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      default:
        break;
    }
    this.setState({ sortType });
   };
  
  
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
          //   // onDecrement={this.onDecrement} />
          // {/* <DisplayProducts products={this.state.products} onIncrement={this.onIncrement} */}
          // {/* onDecrement={this.onDecrement} /> */}
            onDecrement={this.onDecrement}
            sortType={this.state.sortType}
            listNum={this.state.listNum}
            onSort={this.onSort} />


        </div>
      )
    )
  }
}

export default App;
