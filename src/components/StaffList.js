/** @format */
import React, { useState } from "react";

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
			<div
				style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}
				className="col-6 col-md-4 col-lg-2">
				<Card>
					<CardImg src={"/assets/images/addpicture.png"} alt={"staff"} />
					<CardBody>
						<CardText style={{ color: "red" }}>Add a new Staff</CardText>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}

export default StaffList;
