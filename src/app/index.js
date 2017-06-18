import '../public/scss/basic.scss';

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, browserHistory, Switch } from "react-router-dom";

import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";
import {SubText} from "./components/SubText.js";
import {User} from "./components/User.js";
import {Root} from "./components/Root.js";

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
			<Router>
			    <div>
			      <Root>
			        <Switch>
			          <Route exact path="/" component={Home} />
			          <Route path="/user" component={User} />
			          <Route path="/home" component={Home} />
			        </Switch>
			      </Root>
			    </div>
			  </Router>

/*
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
	*/
		)
	}
}

render(<App/>,window.document.getElementById('app'));