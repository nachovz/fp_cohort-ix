import React from "react";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";

export class Itempage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const productid = parseInt(this.props.match.params.theid);
		return (
			<Context.Consumer>
				{({ store }) => {
					const list = store.product.filter(product => product.id === productid);
					if (!list)
						return (
							<h2>
								No product with id:
								{productid}
							</h2>
						);
					return (
						<div>
							<div className="container">
								<h1 className="my-4">
									<small>{productid === productid}</small>
								</h1>

								<div className="row">
									<div className="col-md-8">
										<img className="img-fluid" src="http://placehold.it/750x500" alt="" />
									</div>

									<div className="col-md-4">
										<h3 className="my-3">Product Description</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
											odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in
											adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis
											placerat, felis enim.
										</p>
										<h3 className="my-3">Product Details</h3>
										<ul>
											<li>Lorem Ipsum</li>
											<li>Dolor Sit Amet</li>
											<li>Consectetur</li>
											<li>Adipiscing Elit</li>
										</ul>
									</div>
								</div>

								<h3 className="my-4">Related Products</h3>

								<div className="row">
									<div className="col-md-3 col-sm-6 mb-4">
										<a href="#">
											<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
										</a>
									</div>

									<div className="col-md-3 col-sm-6 mb-4">
										<a href="#">
											<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
										</a>
									</div>

									<div className="col-md-3 col-sm-6 mb-4">
										<a href="#">
											<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
										</a>
									</div>

									<div className="col-md-3 col-sm-6 mb-4">
										<a href="#">
											<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Itempage.propTypes = {
	match: PropTypes.object
};
