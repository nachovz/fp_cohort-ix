import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Login extends React.Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<body className="text-center">
					<form
						className="form-signin"
						style={{ width: "100%", maxWidth: "330px", padding: "15px", margin: " auto" }}>
						<h1 className="h3 mb-3 font-weight-normal">COOLIO-TOYS</h1>
						<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
						<label htmlFor="inputEmail" className="sr-only">
							Email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required=""
							autoFocus=""
						/>
						<label htmlFor="inputPassword" className="sr-only">
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required=""
						/>
						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Sign in
						</button>
						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Create Account
						</button>
						<p className="mt-5 mb-3 text-muted">© 2017-2019</p>
					</form>
				</body>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
