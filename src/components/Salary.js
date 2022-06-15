/** @format */

import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

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
	return <div className="row">{salary}</div>;
}

export default Salary;
