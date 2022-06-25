/** @format */
import {
	ModalFooter,
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	FormFeedback,
	Label,
	Input,
	Col,
} from "reactstrap";
import React, { useRef, useState } from "react";

import { DEPARTMENTS } from "../shared/staffs";

function Filter({ search }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [fields, setFields] = useState({
		staffName: "",
		birth: "",
		startingDay: "",
		department: "",
		salaryScale: "",
		remainingAnualLeave: "",
		overTime: "",
		touched: {
			staffName: false,
			birth: false,
			startingDay: false,
			department: false,
			salaryScale: false,
			remainingAnualLeave: false,
			overTime: false,
		},
	});
	const searchText = useRef(null);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleOnSearch = () => {
		const searchValue = searchText.current.value;
		search(searchValue);
	};

	function handleOnInputChange(e) {
		const id = e.target.id;
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFields((prevState) => {
			return {
				...prevState,
				[id]: value,
			};
		});
	}

	function handleOnBlur(e) {
		const field = e.target.id;
		setFields((prevState) => {
			return {
				...prevState,
				touched: { ...fields.touched, [field]: true },
			};
		});
	}

	function validate() {
		const errors = {
			staffName: "",
			birth: "",
			startingDay: "",
			department: "",
			salaryScale: "",
			remainingAnualLeave: "",
			overTime: "",
		};
		const nameRegExp = /^[a-z ,.'-]{6,15}$/i;
		const numberRegExp = /^\d$/;

		for (const key in errors) {
			if (fields.touched[key] && fields[key] === "") {
				errors[key] = "Requierd";
			}
		}

		if (fields.touched.staffName && !nameRegExp.test(fields.staffName)) {
			errors.staffName =
				"firstname must contains at latest 6 characters and no more 15 characters ";
		}
		if (fields.touched.salaryScale && !numberRegExp.test(fields.salaryScale)) {
			errors.salaryScale = "must be digits";
		}
		if (fields.touched.remainingAnualLeave && !numberRegExp.test(fields.remainingAnualLeave)) {
			errors.remainingAnualLeave = "must be digits";
		}
		if (fields.touched.overTime && !numberRegExp.test(fields.overTime)) {
			errors.overTime = "must be digits";
		}
		return errors;
	}
	const errors = validate();
	const handleOnSubmit = (params) => {};

	return (
		<React.Fragment>
			<div className="row align-items-center mt-4 justify-content-around">
				<div className="col-12 col-lg-3 row">
					<h3 className="col-12 col-md-6 text-center my-2">Staffs</h3>
					<div className=" col-12 col-md-6 my-2 text-center">
						<Button outline onClick={toggleModal}>
							Add Staff
						</Button>
					</div>
				</div>

				<div className="col-12 col-lg-3 align-item-center text-center ">
					<div class="input-group">
						<input
							type="search"
							class="form-control rounded"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="search-addon"
							ref={searchText}
						/>
						<button onClick={handleOnSearch} type="button" class="btn btn-outline-primary ml-2">
							search
						</button>
					</div>
				</div>
				<div className="mt-2 col-12 col-lg-6 row justify-content-around text-center">
					{DEPARTMENTS.map((dept) => {
						return (
							<div key={dept.id}>
								<label className="mr-2" htmlFor={dept.id}>
									{dept.name}
								</label>
								<input value={dept.name} type="checkbox" id={dept.id} />
							</div>
						);
					})}
				</div>
			</div>
			<Modal isOpen={isModalOpen} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>Add Staff</ModalHeader>
				<ModalBody>
					<Form onSubmit={(e) => handleOnSubmit(e)}>
						<FormGroup>
							<div className="row">
								<Label md={4} htmlFor="staffName">
									Name
								</Label>
								<Col md={8}>
									<Input
										type="text"
										id="staffName"
										name="staffName"
										placeholder="Staff Name"
										value={fields.name}
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										valid={fields.touched.staffName && errors.staffName === ""}
										invalid={errors.staffName !== ""}
									/>
									<FormFeedback>{errors.staffName}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="row">
								<Label md={4} htmlFor="birth">
									Birth day
								</Label>
								<Col md={8}>
									<Input
										type="date"
										name="birth"
										id="birth"
										placeholder="Birth day"
										value={fields.birth}
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										valid={fields.touched.birth && errors.birth === ""}
										invalid={errors.birth !== ""}
									/>
									<FormFeedback>{errors.birth}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="row">
								<Label md={4} htmlFor="startingDay">
									Starting Day
								</Label>
								<Col md={8}>
									<Input
										type="date"
										name="startingDay"
										id="startingDay"
										placeholder="First Working Day"
										value={fields.startingDay}
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										valid={fields.touched.startingDay && errors.startingDay === ""}
										invalid={errors.startingDay !== ""}
									/>
									<FormFeedback>{errors.startingDay}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="row">
								<Label md={4} for="department">
									Department
								</Label>
								<Col md={8}>
									<Input
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										value={fields.department}
										type="select"
										name="department"
										id="department"
										valid={fields.touched.department && errors.department === ""}
										invalid={errors.department !== ""}>
										<option>Sale</option>
										<option>HR</option>
										<option>Marketing</option>
										<option>IT</option>
										<option>Finance</option>
									</Input>
									<FormFeedback>{errors.department}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="row">
								<Label md={4} htmlFor="salaryScale">
									Salary Scale
								</Label>
								<Col md={8}>
									<Input
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										value={fields.salaryScale}
										type="text"
										id="salaryScale"
										name="salaryScale"
										placeholder="1.3"
										valid={fields.touched.salaryScale && errors.salaryScale === ""}
										invalid={errors.salaryScale !== ""}
									/>
									<FormFeedback>{errors.salaryScale}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="row">
								<Label md={4} htmlFor="remainingAnualLeave">
									Remaining Anual Leave
								</Label>
								<Col md={8}>
									<Input
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										value={fields.remainingAnualLeave}
										type="text"
										id="remainingAnualLeave"
										name="remainingAnualLeave"
										placeholder="0"
										valid={fields.touched.remainingAnualLeave && errors.remainingAnualLeave === ""}
										invalid={errors.remainingAnualLeave !== ""}
									/>
									<FormFeedback>{errors.remainingAnualLeave}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="row">
								<Label md={4} htmlFor="overTime">
									Over Time
								</Label>
								<Col md={8}>
									<Input
										onChange={(e) => handleOnInputChange(e)}
										onBlur={(e) => handleOnBlur(e)}
										value={fields.overTime}
										type="text"
										id="overTime"
										name="overTime"
										placeholder="0"
										valid={fields.touched.overTime && errors.overTime === ""}
										invalid={errors.overTime !== ""}
									/>
									<FormFeedback>{errors.overTime}</FormFeedback>
								</Col>
							</div>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggleModal}>
						Add
					</Button>{" "}
				</ModalFooter>
			</Modal>
		</React.Fragment>
	);
}

export default Filter;
