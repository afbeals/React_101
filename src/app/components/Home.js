import React from "react";

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.initialAge
		}
	}

	onMakeOlder(){
		this.setState({
			age: this.state.age + 3
		});
	}

	render() {
		return(
			<div>
				<p>My name is {this.props.name}, and I am {this.state.age} year's old</p>
				<hr/>
				<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me Older</button>	
			</div>	
		);
	}
}
