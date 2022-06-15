/** @format */

import React from "react";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard({ item }) {
	return (
		<Link to={`/staff/${item.id}`}>
			<Card style={{ marginTop: 10 }}>
				<CardImg src={item.image} alt={item.name} />
				<CardBody>
					<CardText>{item.name}</CardText>
				</CardBody>
			</Card>
		</Link>
	);
}

export default RenderCard;
