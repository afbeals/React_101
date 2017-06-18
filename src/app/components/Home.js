import React from "react";

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			homeLink: props.initialLinkName
		}
	}

	onMakeOlder(){
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(e){
		this.setState({
			homeLink: e.target.value
		})
	}

	render() {
		return(
			<div>
				<p>My name is {this.props.name}, and I am {this.state.age} year's old</p>
				<hr/>
				<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me Older</button>
				<hr />
				<input type="text" value={this.state.homeLink} onChange={(e)=>this.onHandleChange(e)}/>
				<button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
			</div>	
		);
	}
}
