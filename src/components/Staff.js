/** @format */

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
			<div className="container mt-3">
				<div className="row justify-content-between">{StaffList}</div>
				<div className="container mb-2">
					<div className="row  justify-content-between">
						<button
							data-index="1"
							disabled={this.state.disableBtnId === 1}
							onClick={(e) => {
								this.handleResetLayout(e.target.dataset.index);
							}}
							className="btn btn-danger mt-2 mr-2 col-12 col-sm-4 col-md-2">
							Reset Layout
						</button>

						<button
							data-index="2"
							disabled={this.state.disableBtnId === 2}
							onClick={(e) => {
								this.handleChangeToOneColLayout(e.target.dataset.index);
							}}
							className="btn btn-primary mt-2 mr-2  col-12 col-sm-4 col-md-2">
							1 Column
						</button>
						<button
							data-index="3"
							disabled={this.state.disableBtnId === 3}
							onClick={(e) => {
								this.handleChangeToTwoColLayout(e.target.dataset.index);
							}}
							className="btn btn-secondary mt-2  mr-2 col-12 col-sm-4 col-md-2">
							2 Columns
						</button>
						<button
							data-index="4"
							disabled={this.state.disableBtnId === 4}
							onClick={(e) => {
								this.handleChangeToThreeColLayout(e.target.dataset.index);
							}}
							className="btn btn-success mt-2 mr-2 col-12 col-sm-4 col-md-2">
							3 Columns
						</button>
					</div>
				</div>

				<p className="mt-1" style={this.state.style}>
					Bấm vào tên nhân viên để xem thông tin chi tiết
				</p>
				<div className="row mt-3">
					<div className="col-12 col-md-5 ">
						<StaffDetail selectedStaff={this.state.selectedStaff} />
					</div>
				</div>
			</div>
		);
	}
}

export default Staff;
