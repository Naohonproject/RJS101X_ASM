/** @format */

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import StaffList from "./Staff";
import Header from "./Header";
import Footer from "./Footer";
import DetailStaff from "./DetailStaff";
import Department from "./Department";
import Salary from "./Salary";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

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
			<div className="container">
				<Header />
				<Routes>
					<Route
						index
						element={
							<StaffList staffs={this.state.staffs} departments={this.state.departments} />
						}></Route>
					<Route
						path="/staff"
						element={<StaffList staffs={this.state.staffs} departments={this.state.departments} />}
					/>
					<Route path="/staff/:id" element={<DetailStaff staffs={this.state.staffs} />} />
					<Route path="/dept" element={<Department departments={this.state.departments} />} />
					<Route path="/pay" element={<Salary staffs={this.state.staffs} />} />
				</Routes>

				<Footer />
			</div>
		);
	}
}

export default Main;
