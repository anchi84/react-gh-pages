import React from "react";
import Product from "../product";

class Products extends React.Component {

    handleAdd = (total, items) => {
        this.props.handleAdd(total, items);
    }

    render() {
        return (
            <div className="products">
                {
                    this.props.products.map(product => (
                        <Product 
                            key={product.code}
                            product={product}
                            handleAdd={this.handleAdd}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Products;