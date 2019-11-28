import React, {Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            key: props.index + 1
        };
    }
    render() {
        var indexStyle = {
            margin: "0 20px 0 0"
        }
      	return (
      		<div>
      			<span style={indexStyle}>{this.state.key}</span>
                <span>{this.state.name}</span>
            </div>
        );
    }
}

export default Item;