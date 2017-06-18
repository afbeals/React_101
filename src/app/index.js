import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";
import {SubText} from "./components/SubText.js";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<Header />
					</div>
					<hr className="col-lg-12 col-md-12"/>
					<div className="col-lg-12 col-md-12">
						<Home name={"Allan"} initialAge={28} />
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