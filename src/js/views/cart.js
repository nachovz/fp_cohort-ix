import React from "react";
import { Context } from "../store/appContext.js";
import { CartItem } from "../component/cartItem";

export class Cart extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card shopping-cart">
					<div className="card-header bg-dark text-light">
						<i className="fa fa-shopping-cart" aria-hidden="true" />
						Shopping cart
						{/*<a href="" className="btn btn-outline-info btn-sm pull-right">
							Continue shopping
						</a>*/}
						<div className="clearfix" />
					</div>
					<div className="card-body">
						<Context.Consumer>
							{({ store }) => {
								return store.cartItem.map((elem, index) => {
									return (
										<CartItem
											name={elem.name}
											price={elem.price}
											description={elem.description}
											image={elem.image}
											quantity={elem.quantity}
											key={index}
										/>
									);
								});
							}}
						</Context.Consumer>
						<hr />

						<div className="row">
							<div className="col-12 col-sm-12 col-md-2 text-center">
								<img
									className="img-responsive"
									src="http://placehold.it/120x80"
									alt="prewiew"
									width="120"
									height="80"
								/>
							</div>
							<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
								<h4 className="product-name">
									<strong>Product Name</strong>
								</h4>
								<h4>
									<small>Product description</small>
								</h4>
							</div>
							<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
								<div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: 5 }}>
									<h6>
										<strong>
											25.00 <span className="text-muted">x</span>
										</strong>
									</h6>
								</div>
								<div className="col-4 col-sm-4 col-md-4">
									<div className="quantity">
										<input type="button" value="+" className="plus" />
										<input
											type="number"
											step="1"
											max="99"
											min="1"
											value="1"
											title="Qty"
											className="qty"
											size="4"
										/>
										<input type="button" value="-" className="minus" />
									</div>
								</div>
								<div className="col-2 col-sm-2 col-md-2 text-right">
									<button type="button" className="btn btn-outline-danger btn-xs">
										<i className="fa fa-trash" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
						<hr />

						<div className="pull-right">
							{/*<a href="" className="btn btn-outline-secondary pull-right">
								Update shopping cart
							</a>*/}
						</div>
					</div>
					<div className="card-footer">
						<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
							<div className="row">
								{/*<div className="col-6">
									<input type="text" className="form-control" placeholder="cupone code" />
								</div>
								<div className="col-6">
									<input type="submit" className="btn btn-default" value="Use cupone" />
								</div>*/}
							</div>
						</div>
						<div className="pull-right" style={{ margin: 10 }}>
							<a href="" className="btn btn-success pull-right">
								Checkout
							</a>
							<div className="pull-right" style={{ margin: 5 }}>
								Total price: <b>50.00€</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
