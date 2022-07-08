/** @format */

import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Staff from "./Staff";
import Header from "./Header";
import Footer from "./Footer";
import DetailStaff from "./DetailStaff";
import Department from "./Department";
import Salary from "./Salary";
import StaffOfDepartment from "./StaffsOfDepartment";

import {
	fetchDepartmentsFromServer,
	fetchStaffsFromServer,
	fetchSalaryFromServer,
	postStaffToServer,
	DeleteStaffToServer,
	updateStaffToServer,
} from "../redux/actionCreators";

function mapDispatchToProps(dispatch) {
	return {
		fetchStaffs: () => {
			dispatch(fetchStaffsFromServer());
		},
		fetchDepartment: () => {
			dispatch(fetchDepartmentsFromServer());
		},
		fetchSalary: () => {
			dispatch(fetchSalaryFromServer());
		},
		postStaff: (staff) => {
			dispatch(postStaffToServer(staff));
		},
		deleteStaff: (staffId) => {
			dispatch(DeleteStaffToServer(staffId));
		},
		updateStaff: (updatedStaff) => {
			dispatch(updateStaffToServer(updatedStaff));
		},
	};
}

function mapStateToProps(state) {
	return {
		staffs: state.staffs,
		departments: state.departments,
		salary: state.salary,
	};
}

function Main({
	staffs,
	departments,
	salary,
	fetchStaffs,
	fetchDepartment,
	fetchSalary,
	postStaff,
	deleteStaff,
	updateStaff,
}) {
	useEffect(() => {
		fetchStaffs();
	}, []);

	useEffect(() => {
		fetchDepartment();
		fetchSalary();
	}, [staffs]);

	const staff = () => {
		return (
			<Staff
				staffs={staffs}
				departments={departments}
				postStaff={postStaff}
				deleteStaff={deleteStaff}
			/>
		);
	};
	const department = () => {
		return <Department staffs={staffs} departments={departments} />;
	};
	const salaries = () => {
		return <Salary staffs={salary} />;
	};
	const detailStaff = () => {
		return <DetailStaff staffs={staffs} departments={departments} updateStaff={updateStaff} />;
	};
	const staffOfDepartment = () => {
		return <StaffOfDepartment deleteStaff={deleteStaff} />;
	};

	return (
		<div className="container">
			<Header />
			<Switch>
				<Route exact path="/" component={staff} />
				<Route path="/staff" component={staff} />
				<Route path="/dept" component={department} />
				<Route path="/pay" component={salaries} />
				<Route path="/staffDetail/:id" component={detailStaff} />

				<Route path="/staffs/:deptId" component={staffOfDepartment} />
			</Switch>
			<Footer />
		</div>
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
