import React from "react";
import { Link } from "react-router-dom";
export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<Link to="/">
						<a className="navbar-brand" href="#">
							COOLIO TOYS
						</a>
					</Link>
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link to="/login">
								<a className="nav-link" href="#">
									SIGN IN
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/createaccount">
								<a className="nav-link" href="#">
									SIGN UP
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/gallery">
								<a className="nav-link" href="#">
									All items
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/cart">
								<a className="nav-link" href="#">
									<i className="fas fa-shopping-cart" />
								</a>
							</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
