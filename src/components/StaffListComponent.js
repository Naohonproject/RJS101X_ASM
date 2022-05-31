/** @format */

import React, { Component } from "react";
import { Card, CardText } from "reactstrap";
import StaffDetail from "./StaffDetailComponent";

class StaffList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStaff: null,
			chooseID: -1,
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

	handleChangeToOneColLayout() {
		this.setState({
			...this.state,
			layout: "col-12 m-1",
		});
	}

	handleChangeToTwoColLayout() {
		this.setState({
			...this.state,
			layout: "col-sm-5  m-1",
		});
	}

	handleChangeToThreeColLayout() {
		this.setState({
			...this.state,
			layout: "col-12 col-sm-5 col-md-3 m-1",
		});
	}

	handleResetLayout() {
		this.setState({
			...this.state,
			layout: "col-md-3 m-1",
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
				<button
					onClick={() => {
						this.handleResetLayout();
					}}
					className="btn btn-primary mt-2 mr-5">
					Reset Layout
				</button>
				<button
					onClick={() => {
						this.handleChangeToOneColLayout();
					}}
					className="btn btn-success mt-2">
					1 Column layout
				</button>
				<button
					onClick={() => {
						this.handleChangeToTwoColLayout();
					}}
					className="btn btn-warning mt-2 ml-5">
					2 Columns layout
				</button>
				<button
					onClick={(e) => {
						console.log(e.target);
						this.handleChangeToThreeColLayout();
					}}
					className="btn btn-info mt-2 ml-5">
					3 Columns layout
				</button>
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

export default StaffList;
