import React, {Component} from 'react';
import ToDoList from'./ToDoList';
import Field from './Field';



 class App extends Component {
 	constructor(props) {
 		super(props);
 		this.state = {
  			value: '',
  			list: [], 
  		};

  		this.handleAdd = this.handleAdd.bind(this);
  		this.handleChange = this.handleChange.bind(this);

 	}

	handleAdd(e) {
		if(this.state.value === "") {
			alert("Please enter a new to-do item into the field!")
		} else {
			var newEntry = {
				name: this.state.value,
				key: this.state.list.length
			}
			var newList = this.state.list;
			newList.push(newEntry);
			this.setState({list: newList});
		}
		e.preventDefault();
	}

	handleChange(value) {
		this.setState({value: value});
	}

	render() {
		var appStyle={
			textAlign: "center",
			padding: "15px 50px",
			backgroundColor: "lightblue",
			height: "100%"
			}

		var formStyle={
			display: "flex",
			margin: "10px auto"
		}

		var buttonStyle={
			margin: "10px 0 10px 20px",
			padding: "5px 20px",
			borderRadius: "3px",
			border: "none",
			backgroundColor: "#5cb85c",
			color: "white", 
			cursor: "pointer"
		}
	  return (
	  	<div style={appStyle} id="app">
	  		<header id="header">
	  			<h1>To-Do List</h1>
	  			<h4>Total Items: {this.state.list.length}</h4>
	  		</header>

	  		<ToDoList list={this.state.list} />

	  		<form id="form" style={formStyle} onSubmit={this.handleAdd}>
	  			<Field handleChange={this.handleChange} />
				<input 
					style={buttonStyle} 
					title="Add New Item" 
					value="Add"
					type="submit" />
			</form>

			<footer><a target="_blank" href="https://github.com/arkl8770/to-do">View Source Code</a></footer>
	  	</div>
	  );
	}
}

export default App;
