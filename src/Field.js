import React, {Component} from 'react';


class Field extends Component {
	constructor(props) {
		super(props);
  		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.handleChange(e.target.value);
	}

	render() {
		var inputStyle={
			margin: "10px 10px 10px 0",
			width: "100%"
		}
		return (
			<input style={inputStyle} title="Enter New Item" type="text" placeholder="Add new item here..." onChange={this.handleChange} />
		);
		
	}
}

export default Field;