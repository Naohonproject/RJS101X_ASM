/** @format */

import React from "react";
import { Card, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Salary({ staffs }) {
	const salaries = staffs.map((staff) => {
		return 3000000 * staff.salaryScale + 200000 * staff.overTime;
	});

	const salary = staffs.map((staff) => {
		return (
			<div className="col-lg-4 col-md-6 col-12 my-2" key={staff.id}>
				<Card>
					<CardBody>
						<CardTitle>{staff.name}</CardTitle>
						<CardText>Mã nhân viên : {staff.id}</CardText>
						<CardText>Hệ Số Lương : {staff.salaryScale}</CardText>
						<CardText>Số ngày làm thêm : {staff.overTime}</CardText>
						<CardText>Lương : {salaries[staff.id]}</CardText>
					</CardBody>
				</Card>
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
						<BreadcrumbItem active>Salary</BreadcrumbItem>
					</Breadcrumb>
					<h3 className="col-12">Salary</h3>
					<hr />
				</div>
				<div className="row">{salary}</div>;
			</div>
		</React.Fragment>
	);
}

export default Salary;
