import React from "react";
import Product from "../product";

class Products extends React.Component {

    render() {
        return (
            <div className="products">
                {
                    this.props.products.map(product => (
                        <Product 
                            key={product.code}
                            product={product}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Products;