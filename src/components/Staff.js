/** @format */

import React, { Component } from "react";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import RenderCard from "./RenderCard";
class Staff extends Component {
	constructor(props) {
		super(props);
		const deptIDs = DEPARTMENTS.map((dept) => dept.id);
		this.state = {
			selectedStaff: null,
			staffs: STAFFS,
			departments: DEPARTMENTS,
			checkedIDs: deptIDs,
		};
		this.getDynamicDept = this.getDynamicDept.bind(this);
	}

	getDynamicDept() {
		return this.state.checkedIDs.map((id) => {
			let flag;
			DEPARTMENTS.forEach((dept, index) => {
				if (dept.id === id) {
					flag = index;
				}
			});
			return DEPARTMENTS[flag];
		});
	}

	render() {
		const StaffList = this.state.staffs.map((staff) => {
			return (
				<div className="col-6 col-md-4 col-lg-2 " key={staff.id}>
					<RenderCard item={staff} />
				</div>
			);
		});
		function getName(list, name) {
			let reg = new RegExp(name);
			let result = [];
			list.forEach(function (item) {
				if (item.name.search(reg) > -1) {
					result.push(item);
				}
			});
			return result;
		}

		const handleSearch = (value) => {
			const newStaffs = getName(STAFFS, value);
			this.setState({
				...this.state,
				staffs: newStaffs,
			});
		};

		const hanleCheckBox = (e) => {
			const id = e.target.id;
			if (this.state.checkedIDs.includes(id)) {
				this.setState(
					{
						...this.state,
						checkedIDs: this.state.checkedIDs.filter((preID) => preID !== id),
					},
					() => {
						this.setState({
							...this.state,
							staffs: STAFFS.filter((staff) => {
								const result = this.getDynamicDept().includes(staff.department);
								return result;
							}),
						});
					}
				);
			} else {
				this.setState(
					{
						...this.state,
						checkedIDs: [...this.state.checkedIDs, id],
					},
					() => {
						this.setState({
							...this.state,
							staffs: STAFFS.filter((staff) => {
								const result = this.getDynamicDept().includes(staff.department);
								return result;
							}),
						});
					}
				);
			}
		};
		return (
			<React.Fragment>
				<div className="row align-items-center mt-4 justify-content-around">
					<h3 className="col-12 col-lg-3 text-center">Staffs</h3>
					<div className="col-12 col-lg-3 align-item-center text-center ">
						<input
							style={{
								display: "inline-block",
								height: "38px",
								borderRadius: "4px",
								border: "solid 1px #ccc",
								padding: "8px",
							}}
							onChange={(e) => {
								handleSearch(e.target.value);
							}}
							type="search"
							placeholder="Search"
							className="mx-2"
						/>
					</div>
					<div className="mt-2 col-12 col-lg-6 row justify-content-around text-center">
						{DEPARTMENTS.map((dept) => {
							return (
								<div key={dept.id}>
									<label className="mr-2" htmlFor={dept.id}>
										{dept.name}
									</label>
									<input
										checked={this.state.checkedIDs.includes(dept.id)}
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
				<hr />
				<div className="row mb-4 mt-3">{StaffList}</div>
			</React.Fragment>
		);
	}
}

export default Staff;
