import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="text-center mt-5">
					<h1>Hello Rigo!</h1>
					<p>
						<img src={rigoImage} />
					</p>
					<a href="#" className="btn btn-success">
						If you see this green button, bootstrap is working
					</a>
					<br />
					<Link to="/checkoutForm">Check-Out Form</Link>
					<br />
					<Link to="/login">Login</Link>
					<br />
					<Link to="/gallery">Gallery</Link>
					<br />
					<Link to="/userRegistrationEdit">New User Registration/ Profile Edit</Link>
				</div>
			</React.Fragment>
		);
	}
}
