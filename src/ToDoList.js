import React, {Component} from 'react';
import Item from './Item';


class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemList: props.list,
		}
	}
	render() {
		var listStyle={
			margin: "0 auto",
			height: "200px",
			textAlign: "left",
			backgroundColor: "GhostWhite",
			listStyle: "none",
			overflowY: "scroll"
		}

		var itemStyle={
			padding: "5px 10px 5px 0px",
		}
		return (
			<ul style={listStyle} id="list" >
				{this.state.itemList.map(item => 
					<li style={itemStyle} key={item.key}> 
						<Item name={item.name} index={item.key} />
					</li>
				)}
			</ul>
		);
	}
}

export default ToDoList;