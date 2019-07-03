import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Footer } from "../component/footer";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="jumbotron jumbotron-fluid">
					<div className="nav justify-content-center">
						<h1 className="display-4">COOLIO TOYS</h1>
					</div>
				</div>
				<h1>Popular Items</h1>
				<div className="nav justify-content-center">
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<h1>Recommended items</h1>
				<div className="nav justify-content-center">
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<h1>Items on sale</h1>
				<div className="nav justify-content-center">
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="text-center mt-5">
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
