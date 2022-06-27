/** @format */

import React from "react";
import { CardText, Card, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function mapStateToProps(state) {
	return {
		departments: state.filter.departments,
	};
}

function Department({ departments }) {
	const dept = departments.map((department, index) => {
		return (
			<div className=" col-12 col-md-6 col-lg-4">
				<Link to={`/staffs/${index}`}>
					<Card style={{ marginTop: 10 }}>
						<CardBody>
							<CardTitle>{department.name}</CardTitle>
							<CardText>Số lượng nhân viên : {department.numberOfStaff}</CardText>
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

export default connect(mapStateToProps)(Department);
