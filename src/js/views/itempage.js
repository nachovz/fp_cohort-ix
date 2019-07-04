import React from "react";
export class Itempage extends React.Component {
	render() {
		return (
			<div>
				<h1>Item page</h1>
				<div className="row">
					<div className="col">Name of product</div>
					<div className="col" />
					<div className="col">
						<button type="button" className="btn btn-primary">
							Add to cart
						</button>
					</div>
				</div>
				<div className="mx-auto" style={{ width: 200 }}>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div classNme="card-body">
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
				<div>
					<a>Product info:</a>
				</div>
				<div>
					<ul>
						<li>ererererer</li>
						<li>ererererer</li>
						<li>ererererer</li>
						<li>ererererer</li>
						<li>ererererer</li>
					</ul>
				</div>
			</div>
		);
	}
}
