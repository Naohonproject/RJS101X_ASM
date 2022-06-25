/** @format */
import {
	ModalFooter,
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import React, { useRef, useState } from "react";

import { DEPARTMENTS } from "../shared/staffs";

function Filter({ search }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const searchText = useRef(null);
	const modal = useRef(null);
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleOnSearch = () => {
		const searchValue = searchText.current.value;
		search(searchValue);
	};

	const handleLogin = (params) => {};

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
			<Modal className="show" isOpen={isModalOpen} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggleModal}>
						Do Something
					</Button>{" "}
					<Button color="secondary" onClick={toggleModal}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</React.Fragment>
	);
}

export default Filter;
