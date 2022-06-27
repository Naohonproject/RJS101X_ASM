/** @format */

import React from "react";
import { connect } from "react-redux";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import RenderCard from "./RenderCard";

// TODO: select datas from store to be passed to component such props
function mapStateToProps(state) {
	return {
		staffs: state.staffList,
		departments: state.filter.departments,
	};
}

function StaffOfDepartment({ match, departments, staffs }) {
	// TODO: Take staff id from dynamic URL whichs pass by Link component with "to" props
	const paras = match.params;
	const deptId = paras.deptId;

	// TODO: get the staffs who belongs to the Deparment which user clicked to be rediected to this view
	const staffsOfDept = staffs.filter((staff) => staff.department.id === departments[deptId].id);

	// TODO: Render staffsList to view by map through staffsOfDept
	const StaffList = staffsOfDept.map((staff) => {
		return (
			<div className="col-6 col-md-4 col-lg-2 " key={staff.id}>
				<RenderCard item={staff} />
			</div>
		);
	});

	// return the view
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

// TODO: Connect this component to store
export default connect(mapStateToProps)(StaffOfDepartment);
