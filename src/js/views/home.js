import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Footer } from "../component/footer";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
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
			</React.Fragment>
		);
	}
}
