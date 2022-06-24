/** @format */

import React, { useState, useRef } from "react";
import { STAFFS } from "../shared/staffs";

import Filter from "./Filter";
import StaffList from "./StaffList";
function Staff() {
	const [staffs, setStaffs] = useState(STAFFS);
	const [searchStaff, setSearchStaff] = useState("");

	function getName(list, name) {
		let reg = new RegExp(name, "i");
		let result = [];
		list.forEach(function (item) {
			if (item.name.search(reg) > -1) {
				result.push(item);
			}
		});
		return result;
	}

	function search(value) {
		const searchStaff = getName(staffs, value);
		if (searchStaff.length !== 0) {
			setSearchStaff(searchStaff);
		} else {
			setSearchStaff(null);
		}
	}

	return (
		<React.Fragment>
			<Filter search={search} />
			<hr />
			<StaffList staffs={searchStaff ? searchStaff : staffs} />
		</React.Fragment>
	);
}

export default Staff;
