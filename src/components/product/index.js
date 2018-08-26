import React from "react";

class Product extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            count: 0,
            defaultCount: 0,
            input: ""
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
                count: values[2],
                defaultCount: values[2],
                input: ""
            }
        );
    }

    handleInput = (event) => {
        this.setState({input: "", count: this.state.defaultCount});
    }

    handleInputChange = (event) => {
        const value = event.target.value;  
        if(value >= 0 && value <= this.state.count) {
            this.setState(
                { 
                    input: value,
                    count: this.state.count-value
                }
            );
        }  
    }

    handleMinus = (event) => {
        if (this.state.input > 0 && this.state.count >= 0) {
            this.setState(
                { 
                    input: Number(this.state.input)-1,
                    count: Number(this.state.count)+1
                }
            );
        }
    }

    handlePlus = (event) => {
        if (this.state.input >= 0 && this.state.count > 0) {
            this.setState(
                { 
                    input: Number(this.state.input)+1,
                    count: Number(this.state.count)-1
                }
            );
        }
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
                    ))}
                </select>
                <p>Price per piece: {this.state.price} EUR </p>
                <p>Available pieces: {this.state.count}</p>
                <label>Pieces:</label>
                <input 
                    type="number" 
                    min="0" 
                    max={this.state.count} 
                    value={this.state.input} 
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleInput}
                />
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handlePlus}>+</button>
                <hr/>
        </div>
        );
    }
}

export default Product;