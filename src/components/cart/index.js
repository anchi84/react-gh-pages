import React from "react";

class Cart extends React.Component {

    render() {
        return (
            <div className="cart">
                <span>Cart </span>
                <span>Different products:</span>
                <span>{this.props.different}</span> 
                <span>Number of items:</span>
                <span>{this.props.items}</span> 
                <span>Total price:</span>
                <span>{this.props.total} EUR</span>     
            </div>
        );
    }
}

export default Cart;