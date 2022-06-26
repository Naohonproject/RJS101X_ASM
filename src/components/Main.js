/** @format */

import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import StaffList from "./Staff";
import Header from "./Header";
import Footer from "./Footer";
import DetailStaff from "./DetailStaff";
import Department from "./Department";
import Salary from "./Salary";

import StaffOfDepartment from "./StaffsOfDepartment";
import { StaffContext } from "../context/StaffContext";

function Main() {
	const staffContextValue = useContext(StaffContext);
	const departments = staffContextValue.departments;
	const staffs = staffContextValue.staffs;
	const numberOfStaffs = staffContextValue.numberOfStaffs;

	return (
		<div className="container">
			<Header />
			<Routes>
				<Route index element={<StaffList staffs={staffs} departments={departments} />}></Route>
				<Route path="/staff" element={<StaffList staffs={staffs} departments={departments} />} />
				<Route path="/staff/:id" element={<DetailStaff staffs={staffs} />} />
				<Route
					path="/dept"
					element={<Department departments={departments} numberOfStaffs={numberOfStaffs} />}
				/>
				<Route path="/pay" element={<Salary staffs={staffs} />} />
				<Route
					path="dept/staff/:deptID"
					element={<StaffOfDepartment staffs={staffs} departments={departments} />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default Main;
