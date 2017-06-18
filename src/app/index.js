import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";


class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-6">
						<Header />
					</div>
					<hr className="col-lg-12 col-md-6"/>
					<div className="col-lg-12 col-md-6">
						<Home name={"Allan"} initialAge={28} />
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>,window.document.getElementById('app'));