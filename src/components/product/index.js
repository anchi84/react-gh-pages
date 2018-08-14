import React from "react";

class Product extends React.Component {

    product = this.props.product;
    
    render() {
        return (
            <div className="product">
                <p>{this.product.name}</p>
                <p>{this.product.description}</p>
                <select
                        name="colors"
                        required
                        onChange={this.handleChange}
                    >
                        {this.props.product.colors.map(color => (
                            <option value={color.name} key={color.name}>
                                {color.name}
                            </option>
                        ))}
                </select>
                <p>Price per piece:  EUR. </p>
                <p>Available pieces: </p>
                <label>Pieces:</label>
                <input type="number"/>
                <button>-</button>
                <button>+</button>

            </div>
        );
    }
}

export default Product;