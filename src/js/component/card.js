import React from "react";
import PropTypes from "prop-types";
import { CartItem } from "./cartItem";
import { Context } from "../store/appContext.js";
export const Card = props => {
	return (
		<React.Fragment>
			<div className="nav justify-content-center">
				<div className="card" style={{ width: 350 }}>
					<img className="card-img-top" src={props.image} alt="Card image cap" />

					<div className="card-body">
						<Context.Consumer>
							{({ actions }) => {
								return (
									<button
										type="button"
										className="btn btn-link"
										onClick={() => {
											debugger;
											actions.addToCart(props.cricket);
										}}>
										<h5 className="card-title">{props.name}</h5>
									</button>
								);
							}}
						</Context.Consumer>

						<p className="card-text" />
						<span>{props.price}</span>
						<a href="#" className="btn btn-primary">
							Add to cart
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string,
	cricket: PropTypes.object
};
