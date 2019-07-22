import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const CartItem = props => {
	return (
		<React.Fragment>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-2 text-center">
					<img className="img-responsive" src={props.image} alt="prewiew" width="120" height="80" />
				</div>
				<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
					<h4 className="product-name">
						<strong>{props.name}</strong>
					</h4>
					<h4>
						<small>{props.description}</small>
					</h4>
				</div>
				<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
					<div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: 5 }}>
						<h6>
							<strong>
								{props.price} <span className="text-muted">x</span>
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
						<Context.Consumer>
							{({ actions }) => {
								return (
									<button
										type="button"
										className="btn btn-outline-danger btn-xs"
										onClick={() => {
											actions.deleteElement(props.flying);
										}}>
										<i className="fa fa-trash" aria-hidden="true" />
									</button>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

CartItem.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.String,
	flying: PropTypes.func
};
