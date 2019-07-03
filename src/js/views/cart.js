import React from "react";
import { Navbar } from "./navbar";
export class Cart extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<h1>Cart</h1>
				<div className="row">
					<div className="col border">Item</div>
					<div className="col border">Price</div>
					<div className="col border">Quantity</div>
					<div className="col border" />
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">2</div>
					<div className="col border">
						<button type="button" className="btn btn-link">
							Remove
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">2</div>
					<div className="col border">
						<button type="button" className="btn btn-link">
							Remove
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">2</div>
					<div className="col border">
						<button type="button" className="btn btn-link">
							Remove
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">2</div>
					<div className="col border">
						<button type="button" className="btn btn-link">
							Remove
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col" />
					<div className="col" />
					<div className="col" />
					<div className="col">
						<button type="button" className="btn btn-success">
							Check out
						</button>
					</div>
				</div>
			</div>
		);
	}
}
