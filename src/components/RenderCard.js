/** @format */

import React from "react";
import { Card, CardImg, CardBody, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard({ item, deleteStaff }) {
	const handleDeleteStaff = (e) => {
		e.stopPropagation();
		deleteStaff(item.id);
	};
	return (
		<Card style={{ marginTop: 10 }}>
			<Link to={`/staffDetail/${item.id}`}>
				<CardImg src={item.image} alt={item.name} />
				<CardBody>
					<CardText>{item.name}</CardText>
				</CardBody>
			</Link>
			<div className="row justify-content-center p-3">
				<Button color="danger" size="sm" onClick={(e) => handleDeleteStaff(e)}>
					Delete
				</Button>
			</div>
		</Card>
	);
}

export default RenderCard;
