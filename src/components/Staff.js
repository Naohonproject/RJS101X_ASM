/** @format */

import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import RenderCard from "./RenderCard";
class Staff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStaff: null,
			staffs: STAFFS,
		};
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

		return (
			<React.Fragment>
				<div className="row align-items-center mt-4 justify-content-around">
					<h3 className="col-12 col-md-4">Staffs</h3>
					<div className="col-12 col-md-4 text-center row align-item-center">
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
					<div className="col-12 col-md-4">
						
					</div>
				</div>
				<hr />
				<div className="row mb-4 mt-3">{StaffList}</div>
			</React.Fragment>
		);
	}
}

export default Staff;
