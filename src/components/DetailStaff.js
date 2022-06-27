/** @format */

import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	BreadcrumbItem,
	Breadcrumb,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function mapStateToProps(state) {
	return {
		staffs: state.staffList,
	};
}

function DetailStaff(props) {
	const paras = props.match.params;
	const staff = props.staffs[paras.id];
	const staffName = staff.name;
	const staffBirthDay = dateFormat(staff.doB, "dd/mm/yyyy");
	const startDate = dateFormat(staff.startDate, "dd/mm/yyyy");
	const dept = staff.department.name;
	const annualLeave = staff.annualLeave;
	const overTime = staff.overTime;

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb className="mt-1">
					<BreadcrumbItem>
						<Link to={`/staff`}>Staff</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{staff.name}</BreadcrumbItem>
				</Breadcrumb>
				<h3 className="col-12">{staff.name}</h3>
				<hr />
			</div>

			<div className="row mb-4">
				<div className="col-12 col-md-4 col-lg-3 mt-2">
					<Card>
						<CardImg height="100%" object src={staff.image} alt={staff.name} />
					</Card>
				</div>
				<div className="col-lg-9 col-md-8 col-12 mt-2">
					<Card style={{ height: "100%" }}>
						<CardBody className="d-flex flex-column justify-content-between ">
							<CardTitle> {"Họ và tên :" + staffName}</CardTitle>
							<CardText> {"Ngày sinh : " + staffBirthDay}</CardText>
							<CardText> {"Ngày vào công ty : " + startDate}</CardText>
							<CardText> {"Phòng ban : " + dept}</CardText>
							<CardText> {"Số ngày nghỉ còn lại : " + annualLeave}</CardText>
							<CardText> {"Số ngày đã làm thêm: " + overTime}</CardText>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default connect(mapStateToProps)(DetailStaff);
