/** @format */
import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class StaffDetail extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		const selectedStaff = this.props.selectedStaff;
		if (!selectedStaff) {
			return <div></div>;
		}
		const staffName = selectedStaff.name;
		const staffBirthDay = dateFormat(selectedStaff.doB, "dd/mm/yyyy");
		const startDate = dateFormat(selectedStaff.startDate, "dd/mm/yyyy");
		const dept = selectedStaff.department.name;
		const annualLeave = selectedStaff.annualLeave;
		const overTime = selectedStaff.overTime;

		return (
			<Card>
				<CardBody>
					<CardTitle> {"Họ và tên :" + staffName}</CardTitle>
					<CardText> {"Ngày sinh : " + staffBirthDay}</CardText>
					<CardText> {"Ngày vào công ty : " + startDate}</CardText>
					<CardText> {"Phòng ban : " + dept}</CardText>
					<CardText> {"Số ngày nghỉ còn lại : " + annualLeave}</CardText>
					<CardText> {"Số ngày nghỉ còn lại : " + annualLeave}</CardText>
					<CardText> {"Số ngày đã làm thêm: " + overTime}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default StaffDetail;
