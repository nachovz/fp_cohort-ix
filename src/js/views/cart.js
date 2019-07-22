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
