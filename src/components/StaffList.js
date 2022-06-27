/** @format */
import React from "react";

import { connect } from "react-redux";
import RenderCard from "./RenderCard";

function mapStateToProps(state) {
	return {
		staffs: state.staffList,
	};
}

function StaffList({ staffs }) {
	return (
		<div className="row mb-4 mt-3">
			{staffs.map((staff) => {
				return (
					<div className="col-6 col-md-4 col-lg-2 " key={staff.id}>
						<RenderCard item={staff} />
					</div>
				);
			})}
		</div>
	);
}

export default connect(mapStateToProps)(StaffList);
