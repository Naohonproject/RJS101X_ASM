/** @format */
import React from "react";

import RenderCard from "./RenderCard";

function StaffList({ staffsList, deleteStaff }) {
	return (
		<div className="row mb-4 mt-3">
			{staffsList.map((staff) => {
				return (
					<div className="col-6 col-md-4 col-lg-2 " key={staff.id}>
						<RenderCard item={staff} deleteStaff={deleteStaff} />
					</div>
				);
			})}
		</div>
	);
}

export default StaffList;
