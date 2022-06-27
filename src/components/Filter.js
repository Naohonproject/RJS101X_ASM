/** @format */
import { Modal, Button, ModalHeader, ModalBody, Form, Label, Col, Row } from "reactstrap";
import React, { useRef, useState } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { connect } from "react-redux";
import { DEPARTMENTS } from "../shared/staffs";
import { addStaff } from "../redux/actions";

function mapStateToProps(state) {
	return {
		staffs: state.staffList,
		departments: state.filter.departments,
		searchText: state.filter.search,
	};
}

function Filter({ staffs, departments, searchText, dispatch }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// const searchText = useRef(null);

	function handleAddStaff() {
		dispatch(
			addStaff({
				id: 16,
				name: "Nguyễn Văn F",
				doB: "2003-01-01T08:59:00.000Z",
				salaryScale: 1,
				startDate: "2019-04-30T08:59:00.000Z",
				department: DEPARTMENTS[4],
				annualLeave: 9,
				overTime: 10,
				image: "/assets/images/staff7.jpg",
			})
		);
	}

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleOnSearch = () => {};

	// const nameRegExp = /^[a-z ,.'-]{6,15}$/i;
	// const numberRegExp = /^\d$/;
	// const required = (val) => val && val.length;
	// const notNaN = (val) => val && numberRegExp.test(val);
	// const valName = (val) => val && nameRegExp.test(val);

	return (
		<React.Fragment>
			<div className="row align-items-center mt-4 justify-content-around">
				<div className="col-12 col-lg-3 row">
					<h3 className="col-12 col-md-6 text-center my-2">Staffs</h3>
					<div className=" col-12 col-md-6 my-2 text-center">
						<Button outline onClick={handleAddStaff}>
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
							// ref={searchText}
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
				<ModalBody></ModalBody>
			</Modal>
		</React.Fragment>
	);
}

export default connect(mapStateToProps)(Filter);
