/** @format */

import React from "react";

import { Card, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import { Loading } from "./Loading";
import { Fade, Stagger } from "react-animation-components";

function Salary({ staffs }) {
	if (staffs.isLoading) {
		return <Loading />;
	} else {
		const salary = staffs.salary.map((staff) => {
			return (
				<div className="col-lg-4 col-md-6 col-12 my-2" key={staff.id}>
					<Fade in>
						<Card>
							<CardBody>
								<CardTitle>{staff.name}</CardTitle>
								<CardText>Mã nhân viên : {staff.id}</CardText>
								<CardText>Hệ Số Lương : {staff.salaryScale}</CardText>
								<CardText>Số ngày làm thêm : {staff.overTime}</CardText>
								<CardText>Lương : {staff.salary}</CardText>
							</CardBody>
						</Card>
					</Fade>
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
					<Stagger in>
						<div className="row">{salary}</div>
					</Stagger>
				</div>
			</React.Fragment>
		);
	}
}

export default Salary;
