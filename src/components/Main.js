/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import StaffList from "./Staff";
import Header from "./Header";
import Footer from "./Footer";
import DetailStaff from "./DetailStaff";
import Department from "./Department";
import Salary from "./Salary";
import StaffOfDepartment from "./StaffsOfDepartment";

function Main() {
	return (
		<div className="container">
			<Header />
			<Switch>
				<Route exact path="/" component={StaffList}></Route>
				<Route path="/staff/:id" component={DetailStaff} />
				<Route path="/staff" component={StaffList} />
				<Route path="/dept" component={Department} />
				<Route path="/pay" component={Salary} />
				<Route path="/staffs/:deptId" component={StaffOfDepartment} />
			</Switch>
			<Footer />
		</div>
	);
}

export default Main;
