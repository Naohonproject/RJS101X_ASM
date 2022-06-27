/** @format */

import React from "react";
import { connect } from "react-redux";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import RenderCard from "./RenderCard";

function mapStateToProps(state) {
	return {
		staffs: state.staffList,
		departments: state.filter.departments,
	};
}

function StaffOfDepartment({ match, departments, staffs }) {
	const paras = match.params;

	const deptId = paras.deptId;

	const staffsOfDept = staffs.filter((staff) => staff.department.id === departments[deptId].id);

	const StaffList = staffsOfDept.map((staff) => {
		return (
			<div className="col-6 col-md-4 col-lg-2 " key={staff.id}>
				<RenderCard item={staff} />
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

export default connect(mapStateToProps)(StaffOfDepartment);
