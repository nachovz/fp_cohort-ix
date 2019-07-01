import React from "react";

export class Createaccount extends React.Component {
	render() {
		return (
			<div>
				<h1 className="mx-auto" style={{ width: "200px" }}>
					Create account
				</h1>
				<div className="container">
					<form>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">First name</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="First name"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Last name</label>
								<input type="email" className="form-control" id="inputEmail4" placeholder="Last name" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Email</label>
								<input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Password</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
									placeholder="Password"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Re-enter Password</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
									placeholder="RE-enter Password"
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Address</label>
							<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress2">Address 2</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress2"
								placeholder="Apartment, studio, or floor"
							/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputCity">City</label>
								<input type="text" className="form-control" id="inputCity" />
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="inputState">State</label>
								<select id="inputState" className="form-control">
									<option selected>Choose...</option>
									<option>...</option>
								</select>
							</div>
							<div className="form-group col-md-2">
								<label htmlFor="inputZip">Zip</label>
								<input type="text" className="form-control" id="inputZip" />
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="gridCheck" />
								<label className="form-check-label" htmlFor="gridCheck" />
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							Create account
						</button>
					</form>
				</div>
			</div>
		);
	}
}