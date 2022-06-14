/** @format */

import { Request } from "cross-fetch";
import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import StaffDetail from "./StaffDetail";

class Staff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStaff: null,
			chooseID: -1,
			disableBtnId: -1,
			style: {
				display: "block",
			},
			layout: "col-12 col-sm-5 col-md-3 m-1",
		};
	}

	handleClick(staff) {
		this.setState({
			...this.state,
			selectedStaff: staff,
			style: { display: "none" },
			chooseID: staff.id,
		});
	}

	handleChangeToOneColLayout(btnId) {
		this.setState({
			...this.state,
			layout: "col-12 m-1",
			disableBtnId: parseInt(btnId),
		});
	}

	handleChangeToTwoColLayout(btnId) {
		this.setState({
			...this.state,
			layout: "col-sm-5  m-1",
			disableBtnId: parseInt(btnId),
		});
	}

	handleChangeToThreeColLayout(btnId) {
		this.setState({
			...this.state,
			layout: "col-12 col-sm-5 col-md-3 m-1",
			disableBtnId: parseInt(btnId),
		});
	}

	handleResetLayout(btnId) {
		this.setState({
			...this.state,
			layout: "col-md-3 m-1",
			disableBtnId: parseInt(btnId),
		});
	}

	render() {
		const StaffList = this.props.staffs.map((staff) => {
			return (
				<div
					key={staff.id}
					style={
						this.state.chooseID === staff.id
							? { color: "red" }
							: {
									color: "black",
							  }
					}
					onClick={() => this.handleClick(staff)}
					className={this.state.layout}>
					<Card>
						<CardText>{staff.name}</CardText>
					</Card>
				</div>
			);
		});

		return (
			<div className="container mt-3 ">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-6">
						<h3>Staff List</h3>
					</div>
					<div className="col-12 col-lg-6 text-center row">
						<input
							type="search"
							className=" col-9 form-control rounded "
							placeholder=" Type Staff Name"
							aria-label="Search"
						/>
						<button type="button" class="btn btn-primary ml-1">
							Search
						</button>
					</div>
				</div>
				<hr />
				<div className="row justify-content-between mb-3">{StaffList}</div>
			</div>
		);
	}
}

export default Staff;
