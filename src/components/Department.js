/** @format */

import React from "react";
import { CardText, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
function Department({ departments }) {
	const dept = departments.map((department) => {
		return (
			<div className=" col-12 col-md-6 col-lg-4">
				<Link to={`/staff/${department.id}`}>
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
	return <div className="row mb-3">{dept}</div>;
}

export default Department;
