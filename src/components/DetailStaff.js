/** @format */

import { Control, LocalForm, Errors } from "react-redux-form";
import React, { useEffect, useState } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	BreadcrumbItem,
	Breadcrumb,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
	Col,
	Row,
} from "reactstrap";

import dateFormat from "dateformat";
import { Link, withRouter } from "react-router-dom";
import { Loading } from "./Loading";

function DetailStaff(props) {
	if (props.staffs.isLoading || props.departments.isLoading) {
		return <Loading />;
	} else {
		const urlId = props.match.params.id;
		const staff = props.staffs.staffs[urlId];

		const staffName = staff.name;
		const staffBirthDay = dateFormat(staff.doB, "dd/mm/yyyy");
		const startDate = dateFormat(staff.startDate, "dd/mm/yyyy");
		const deptId = staff.departmentId;
		const departmentName = props.departments.departments.find((dept) => dept.id === deptId).name;
		const annualLeave = staff.annualLeave;
		const overTime = staff.overTime;
		const salaryScale = staff.salaryScale;

		const [isModalOpen, setIsModalOpen] = useState(false);
		const toggleModal = () => {
			setIsModalOpen(!isModalOpen);
		};
		const nameRegExp = /^[a-z ,.'-]{6,15}$/i;
		const numberRegExp = /^[+-]?([0-9]*[.])?[0-9]+$/;
		const required = (val) => val && val.length;
		const isNumber = (val) => val && numberRegExp.test(val);
		const valName = (val) => val && nameRegExp.test(val);

		const handleUpdateStaff = (value) => {
			const updatedStaff = {
				name: value.name,
				doB: value.birthDay,
				salaryScale: Number(value.scaleSalary),
				startDate: value.startingDate,
				departmentId: deptId,
				annualLeave: Number(value.ramaingDayOff),
				overTime: Number(value.overTime),
				image: "/assets/images/alberto.png",
			};

			setIsModalOpen(!isModalOpen);
		};

		return (
			<React.Fragment>
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

								<Button className="my-1" size="lg" color="primary" onClick={toggleModal}>
									Update
								</Button>
							</Card>
						</div>
						<div className="col-lg-9 col-md-8 col-12 mt-2">
							<Card style={{ height: "100%" }}>
								<CardBody className="d-flex flex-column justify-content-between ">
									<CardTitle> {"Họ và tên :" + staffName}</CardTitle>
									<CardText> {"Ngày sinh : " + staffBirthDay}</CardText>
									<CardText> {"Ngày vào công ty : " + startDate}</CardText>
									<CardText> {"Phòng ban : " + departmentName}</CardText>
									<CardText> {"Số ngày nghỉ còn lại : " + annualLeave}</CardText>
									<CardText> {"Số ngày đã làm thêm: " + overTime}</CardText>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
				<Modal isOpen={isModalOpen} toggle={toggleModal}>
					<ModalHeader toggle={toggleModal}>Add Staff</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(value) => handleUpdateStaff(value)}>
							<Row className="form-group">
								<Label htmlFor={"name"} md={4}>
									Name
								</Label>
								<Col md={8}>
									<Control.text
										defaultValue={staffName}
										model=".name"
										className="form-control"
										id="name"
										name="name"
										placeHolder="Your Name"
										validators={{
											required,
											valName: valName,
										}}
									/>
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										messages={{
											required: "This feild is required and ",
											valName: "Must be greater than 5 characters",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"birthDay"} md={4}>
									Birth Day
								</Label>
								<Col md={8}>
									<Control
										defaultValue={staffBirthDay}
										type="date"
										model=".birthDay"
										className="form-control"
										id="birthDay"
										name="birthDay"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".birthDay"
										show="touched"
										messages={{
											required: "This feild is required and ",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"startingDate"} md={4}>
									Starting Day
								</Label>
								<Col md={8}>
									<Control
										defaultValue={startDate}
										type="date"
										model=".startingDate"
										className="form-control"
										id="startingDate"
										name="startingDate"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".startingDate"
										show="touched"
										messages={{
											required: "This feild is required and ",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"departments"} md={4}>
									Departments
								</Label>
								<Col md={8}>
									<Control.select
										defaultValue={departmentName}
										model=".departments"
										className="form-control"
										id="departments"
										name="departments">
										<option>Sale</option>
										<option>HR</option>
										<option>Marketing</option>
										<option>IT</option>
										<option>Finance</option>
									</Control.select>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"scaleSalary"} md={4}>
									Salary Scale
								</Label>
								<Col md={8}>
									<Control.text
										defaultValue={salaryScale}
										model=".scaleSalary"
										className="form-control"
										id="scaleSalary"
										name="scaleSalary"
										placeHolder="1.1"
										validators={{
											required,
											isNumber,
										}}
									/>
									<Errors
										className="text-danger"
										model=".scaleSalary"
										show="touched"
										messages={{
											required: "This feild is required and ",
											isNumber: "Must be a number",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"ramaingDayOff"} md={4}>
									Remaining Day Off
								</Label>
								<Col md={8}>
									<Control.text
										defaultValue={annualLeave}
										model=".ramaingDayOff"
										className="form-control"
										id="ramaingDayOff"
										name="ramaingDayOff"
										placeHolder="1"
										validators={{
											required,
											isNumber,
										}}
									/>
									<Errors
										className="text-danger"
										model=".ramaingDayOff"
										show="touched"
										messages={{
											required: "This feild is required and ",
											isNumber: "Must be a number",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"overTime"} md={4}>
									Remaining Day Off
								</Label>
								<Col md={8}>
									<Control.text
										defaultValue={overTime}
										model=".overTime"
										className="form-control"
										id="overTime"
										name="overTime"
										placeHolder="3"
										validators={{
											required,
											isNumber,
										}}
									/>
									<Errors
										className="text-danger"
										model=".overTime"
										show="touched"
										messages={{
											required: "This feild is required and ",
											isNumber: "Must be a number",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										ADD
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default withRouter(DetailStaff);
