/** @format */

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import StaffList from "./Staff";
import Header from "./Header";
import Footer from "./Footer";
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
					<Route></Route>
				</Routes>
				<StaffList staffs={this.state.staffs} departments={this.state.departments} />
				<Footer />
			</div>
		);
	}
}

export default Main;
