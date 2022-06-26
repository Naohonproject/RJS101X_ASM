/** @format */
import React from "react";

import { Card, CardImg, CardBody, CardText } from "reactstrap";

import RenderCard from "./RenderCard";

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

export default StaffList;
