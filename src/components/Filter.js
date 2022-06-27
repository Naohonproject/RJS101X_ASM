/** @format */
import { Modal, Button, ModalHeader, ModalBody, Label, Col, Row } from "reactstrap";
import React, { useRef, useState, useEffect } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { connect } from "react-redux";
import { addStaff } from "../redux/actions";

// TODO: select datas from store to be passed to component such props
function mapStateToProps(state) {
	return {
		staffs: state.staffList,
		departments: state.filter.departments,
	};
}

// TODO: This compoent is responsile for filter staffs list in Staff Component by seaching,checking to checkbox
function Filter({ staffs, departments, dispatch, search, setsearchedStaff, setfiltedStaffs }) {
	// TODO: get ids from department
	const deptIDs = departments.map((dept) => dept.id);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [checkedIDs, setCheckedIDs] = useState(deptIDs);

	//TODO: get depts which rely on checkIDs state which update when user checked or unchecked the checkboxs
	const getCheckedDept = () => {
		return checkedIDs.map((id) => {
			let flag;
			departments.forEach((dept, index) => {
				if (dept.id === id) {
					flag = index;
				}
			});
			return departments[flag];
		});
	};

	// TODO: handle checking and unchecking the checking box by new state for checkedIDs state
	const hanleCheckBox = (e) => {
		const id = e.target.id;
		if (checkedIDs.includes(id)) {
			setCheckedIDs(checkedIDs.filter((preID) => preID !== id));
		} else {
			setCheckedIDs((prev) => [...checkedIDs, id]);
		}
	};

	//TODO: difined what will be doing after staffs(from store) and checkedIDs state update
	useEffect(() => {
		const newFiltedStaff = staffs.filter((staff) => {
			const result = getCheckedDept()
				.map((dept) => dept.id)
				.includes(staff.department.id);
			return result;
		});
		// TODO:update fileredStaffs which the state of Staff Component(this component's parent componet)
		setfiltedStaffs(newFiltedStaff);
	}, [checkedIDs, staffs]);

	// TODO: hanle event when user click on button named "add Staffs",a popup will be displayed
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	//TODO: use ref to take the DOM elment from DOM
	const searchInput = useRef(null);

	// TODO: hanle when click search button, implement search funcion which is defined insise the Staff Component to setSate for searchedStaff state
	const handleOnSearch = () => {
		const searchresult = searchInput.current.value;
		search(searchresult);
	};

	// TODO: hanle the event when user don't need to search anymore , thay clear the search input, then the staffList component need to re-render with filteredStaffs data because we setState for searchedStaff to null
	const handleOnKeyUp = (e) => {
		const inputValue = e.target.value;
		if (inputValue === "") {
			setsearchedStaff(null);
		}
	};

	// TODO: HANDLE ADD NEW STAFF by take data from controled Form that inside Modal popup
	function handleAddStaff(value) {
		const deptIndex = departments.indexOf(
			departments.find((dept) => dept.name === value.departments)
		);

		const newStaff = {
			id: staffs.length,
			name: value.name,
			doB: value.birthDay,
			salaryScale: Number(value.scaleSalary),
			startDate: value.startingDate,
			department: departments[deptIndex],
			annualLeave: Number(value.ramaingDayOff),
			overTime: Number(value.overTime),
			image: "/assets/images/staff8.jpg",
		};
		// TODO: dispatch a "addStaff" action with payload is the new Staff
		dispatch(addStaff(newStaff));
		setIsModalOpen(!isModalOpen);
	}

	// TODO: difine expressions to validate our form
	const nameRegExp = /^[a-z ,.'-]{6,15}$/i;
	const numberRegExp = /^[+-]?([0-9]*[.])?[0-9]+$/;
	const required = (val) => val && val.length;
	const isNumber = (val) => val && numberRegExp.test(val);
	const valName = (val) => val && nameRegExp.test(val);

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
							ref={searchInput}
							onKeyUp={handleOnKeyUp}
						/>
						<button onClick={handleOnSearch} type="button" class="btn btn-outline-primary ml-2">
							search
						</button>
					</div>
				</div>
				<div className="mt-2 col-12 col-lg-6 row justify-content-around text-center">
					{departments.map((dept) => {
						return (
							<div key={dept.id}>
								<label className="mr-2" htmlFor={dept.id}>
									{dept.name}
								</label>
								<input
									checked={checkedIDs.includes(dept.id)}
									value={dept.name}
									type="checkbox"
									id={dept.id}
									onChange={(e) => {
										hanleCheckBox(e);
									}}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<Modal isOpen={isModalOpen} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>Add Staff</ModalHeader>
				<ModalBody>
					<LocalForm onSubmit={(value) => handleAddStaff(value)}>
						<Row className="form-group">
							<Label htmlFor={"name"} md={4}>
								Name
							</Label>
							<Col md={8}>
								<Control.text
									defaultValue="Le Tuan Bao"
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
									defaultValue="06/27/2022"
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
									defaultValue="06/27/2022"
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
									defaultValue="IT"
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
									defaultValue="1.1"
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
									defaultValue="0"
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
									defaultValue="0"
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
// TODO: Connect this component to store
export default connect(mapStateToProps)(Filter);
