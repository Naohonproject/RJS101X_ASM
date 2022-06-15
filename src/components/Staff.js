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

		return <div className="row mb-4 mt-3">{StaffList}</div>;
	}
}

export default Staff;
