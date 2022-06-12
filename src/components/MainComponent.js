/** @format */
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffListComponent";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			staffs: STAFFS,
			departments: DEPARTMENTS,
		};
	}

	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Ứng dụng quản lý nhân viên v1.0</NavbarBrand>
					</div>
				</Navbar>
				<StaffList staffs={this.state.staffs} departments={this.state.departments} />
			</div>
		);
	}
}

export default Main;
