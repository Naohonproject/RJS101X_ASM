/** @format */

import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
	return (
		<Card>
			<CardImg src={item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
			</CardBody>
		</Card>
	);
}

export default RenderCard;
