import React from "react";
import Product from "../product";

class Products extends React.Component {

    render() {
        return (
            <div className="products">
                {
                    this.props.products ? (
                        this.props.products.map(product => (
                        <Product 
                            key={product.code}
                            product={product}
                        />
                    ))) : (
                        <p />
                    )
                }
            </div>
        );
    }
}

export default Products;