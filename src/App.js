import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/products';
import Cart from './components/cart'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products:[],
      total: 0,
      items: 0,
      different: 0
    };
  }

  componentDidMount() {
    const url = `https://my-json-server.typicode.com/anchi84/web-shop/products`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ products: data });
      });
  }

  handleAdd = (total, items) => {
    this.setState(
      {
        total: this.state.total + total,
        items: this.state.items + items,
        // different: 1 
      }
    );  
  }

render() {
    return (
      <div>
        <Header/>
        <Cart total={this.state.total} different={this.state.different} items={this.state.items}/>
        <Products products={this.state.products} handleAdd={this.handleAdd}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
