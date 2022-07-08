/** @format */

import React from "react";
import { CardText, Card, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

function Department({ departments, staffs }) {
	if (departments.isLoading || staffs.isLoading) {
		return <Loading />;
	} else {
		const staffNumberOfDept = departments.departments.map((dept) => {
			let numberOfStaff = 0;
			staffs.staffs.forEach((staff) => {
				if (staff.departmentId === dept.id) {
					numberOfStaff = numberOfStaff + 1;
				}
			});
			return numberOfStaff;
		});

		const dept = departments.departments.map((department, index) => {
			return (
				<div className=" col-12 col-md-6 col-lg-4" key={department.id}>
					<Link to={`/staffs/${department.id}`}>
						<Card style={{ marginTop: 10 }}>
							<CardBody>
								<CardTitle>{department.name}</CardTitle>
								<CardText>Số lượng nhân viên : {staffNumberOfDept[index]}</CardText>
							</CardBody>
						</Card>
					</Link>
				</div>
			);
		});

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<Breadcrumb className="mt-1">
							<BreadcrumbItem>
								<Link to={"/staff"}>Staff</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>Department</BreadcrumbItem>
						</Breadcrumb>
						<h3 className="col-12">Department</h3>
						<hr />
					</div>
					<div className="row mb-3">{dept}</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Department;
