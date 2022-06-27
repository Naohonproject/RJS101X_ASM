/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";

import Filter from "./Filter";
import StaffList from "./StaffList";

function mapStateToProps(state) {
	return {
		staffs: state.staffList,
		departments: state.filter.departments,
	};
}

function Staff({ staffs }) {
	const [filtedStaffs, setfiltedStaffs] = useState(staffs);
	const [searchedStaff, setsearchedStaff] = useState(null);

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
		const searchStaff = getName(filtedStaffs, value);
		if (searchStaff.length !== 0) {
			setsearchedStaff(searchStaff);
		} else {
			setsearchedStaff(null);
		}
	}

	return (
		<React.Fragment>
			<Filter
				search={search}
				setsearchedStaff={setsearchedStaff}
				setfiltedStaffs={setfiltedStaffs}
			/>
			<hr />
			<StaffList staffsList={searchedStaff || filtedStaffs} />
		</React.Fragment>
	);
}

export default connect(mapStateToProps)(Staff);
