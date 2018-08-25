import React from "react";

class Product extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            count: 0
        };
    }

    handleColorChange = (event) => {
        const values = event.target.value.split(','); 
        console.log(values[0]);
        console.log(values[1]);
        console.log(values[2]);
        this.setState(
            {
                name: values[0],
                price: values[1],
                count: values[2]
            }
        );
    }

    render() {
        const {
            name,
            description,
            colors,
            price,
            count
        } = this.props.product;
        
        console.log(this.props.product);
        
        return (
            <div className="product">
                <p>{name}</p>
                <p>{description}</p>
                <select
                    name="colors"
                    onChange={this.handleColorChange}
                >
                    <option value={['none',0,0]} default>Select your color...</option>
                    {
                        colors.map(color => (
                        <option value={[color.name, color.price, color.count]} key={color.name}>
                            {color.name}
                        </option>
                    ))}
                </select>
                <p>Price per piece: {this.state.price} EUR </p>
                <p>Available pieces: {this.state.count}</p>
                <label>Pieces:</label>
                <input type="number"/>
                <button>-</button>
                <button>+</button>
                <hr/>
        </div>
        );
    }
}

export default Product;