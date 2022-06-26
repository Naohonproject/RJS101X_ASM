/** @format */

import React, { useState, useContext } from "react";

import Filter from "./Filter";
import StaffList from "./StaffList";
import { StaffContext } from "../context/StaffContext";

function Staff() {
	const staffContextValue = useContext(StaffContext);

	const staffs = staffContextValue.staffs;
	const setStaffs = staffContextValue.setStaffs;

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
			<Filter search={search} setStaffs={setStaffs} staffs={staffs} />
			<hr />
			<StaffList staffs={searchStaff ? searchStaff : staffs} />
		</React.Fragment>
	);
}

export default Staff;
