/** @format */

import React, { useEffect, useState } from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

import RenderCard from "./RenderCard";

function StaffOfDepartment({ match, deleteStaff }) {
	const deptId = match.params.deptId;
	const [staffs, setStaffs] = useState([]);

	useEffect(() => {
		fetch(`https://rjs101xbackend.herokuapp.com/departments/${deptId}`)
			.then((res) => res.json())
			.then((data) => setStaffs([...staffs, ...data]));
	}, []);

	if (staffs.length === 0) {
		return (
			<div>
				<h1>No STAFFS</h1>
			</div>
		);
	} else {
		const staffsOfDept = staffs.filter((staff) => staff.departmentId === deptId);

		const StaffList = staffsOfDept.map((staff) => {
			return (
				<div className="col-6 col-md-4 col-lg-2 " key={staff.id}>
					<RenderCard item={staff} deleteStaff={deleteStaff} />
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<Breadcrumb className="mt-1">
						<BreadcrumbItem>
							<Link to={`/staff`}>Staff</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							<Link to={"/dept"}>Department</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>Staffs</BreadcrumbItem>
					</Breadcrumb>
					<hr />
				</div>
				<div className="row mb-4 mt-3">{StaffList}</div>
			</div>
		);
	}
}

export default withRouter(StaffOfDepartment);
