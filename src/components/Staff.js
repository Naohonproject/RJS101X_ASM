/** @format */

import React from "react";

import Filter from "./Filter";
import StaffList from "./StaffList";

function Staff(props) {
	return (
		<React.Fragment>
			<Filter />
			<hr />
			<StaffList />
		</React.Fragment>
	);
}

export default Staff;
