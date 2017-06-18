import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";
import {SubText} from "./components/SubText.js";

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			homeLink: "Home"
		}
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		})
	}


	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<Header homeLink={this.state.homeLink} />
					</div>
					<hr className="col-lg-12 col-md-12"/>
					<div className="col-lg-12 col-md-12">
						<Home 	name={"Allan"} 
								initialAge={28} 
								changeLink={(e)=> this.onChangeLinkName(e)} 
								initialLinkName={this.state.homeLink}
						/>
					</div>
					<div className="col-lg-12 col-md-12">
						<SubText />
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>,window.document.getElementById('app'));