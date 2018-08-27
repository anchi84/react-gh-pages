import React from "react";

class Product extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            count: 0,
            defaultCount: 0,
            input: 0,
            total: 0
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
                price: Number(values[1]),
                count: Number(values[2]),
                defaultCount: Number(values[2]),
                input: 0,
            }
        );
    }

    handleInput = (event) => {
        this.setState({input: 0, count: this.state.defaultCount});
    }

    handleInputChange = (event) => {
        const value = Number(event.target.value);  
        if(value >= 0 && value <= this.state.count) {
            this.setState(
                { 
                    input: value,
                    count: this.state.count - value,
                    total: value * this.state.price
                }
            );
        }  
    }

    handleMinus = (event) => {
        if (this.state.input > 0 && this.state.count >= 0) {
            this.setState(
                { 
                    input: this.state.input - 1,
                    count: this.state.count + 1,
                    total: (this.state.input - 1) * this.state.price
                }
            );
        }
    }

    handlePlus = (event) => {
        if (this.state.input >= 0 && this.state.count > 0) {
            this.setState(
                { 
                    input: this.state.input + 1,
                    count: this.state.count - 1,
                    total: (this.state.input + 1) * this.state.price
                }
            );
        }
    }

    handleAdd = (event) => {
        this.props.handleAdd(this.state.total, this.state.input);
        this.setState({total: 0, input: 0});
    }

    render() {
        const {
            name,
            description,
            colors,
            price,
            count
        } = this.props.product;
        
        // console.log(this.props.product);
        
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
                        ))
                    }
                </select>
                <p>Price per piece: {this.state.price} EUR </p>
                <p>Available pieces: {this.state.count}</p>
                <label>Pieces: </label>
                <button onClick={this.handleMinus}>-</button>
                <input 
                    type="text" 
                    min="0" 
                    max={this.state.count}
                    pattern="[0-9]+" 
                    value={this.state.input} 
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleInput}
                />  
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleAdd}>Add to cart</button>
                <hr/>
        </div>
        );
    }
}

export default Product;