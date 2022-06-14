/** @format */

import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
	return (
		<Card>
			<CardImg src={require("../assets/images/staff.jpg")} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
			</CardBody>
		</Card>
	);
}

export default RenderCard;
