import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Products from './components/products';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products:[]
    };
  }

  componentDidMount() {
    const url = `https://my-json-server.typicode.com/anchi84/web-shop/products`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ products: data });
        });
}
  render() {
    return (
      <div>
        <Header/>
        <Products products={this.state.products}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
