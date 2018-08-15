import React from "react";

class Product extends React.Component {
   state = {
        name: "",
        price: 0,
        count: 0
    };

    product = this.props.product;

    handleChange = (event) => {
        console.log(event.target.value.split(',')[0]);
        console.log(event.target.value.split(',')[1]);
        console.log(event.target.value.split(',')[2]);
        this.setState({name: event.target.value.split(',')[0],
                        price: event.target.value.split(',')[1],
                        count: event.target.value.split(',')[2]
        });
    }

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
                    <option/>
                    {
                        this.product.colors.map(color => (
                        <option value={[color.name, color.price, color.count]} key={color.name}>
                            {color.name}
                        </option>
                    ))}
                </select>
                <p>Price per piece: {this.state.price} EUR. </p>
                <p>Available pieces: {this.state.count}</p>
                <label>Pieces:</label>
                <input type="number"/>
                <button>-</button>
                <button>+</button>

            </div>
        );
    }
}

export default Product;