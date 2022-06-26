/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import RenderCard from "./RenderCard";
function StaffOfDepartment({ staffs, departments }) {
	const params = useParams();
	const deptId = params.deptID;

	const staffsOfDept = staffs.filter((staff) => staff.department.id === departments[deptId].id);

	console.log(staffs[1].department.id === departments[deptId].id);

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

export default StaffOfDepartment;
