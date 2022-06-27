/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";

import Filter from "./Filter";
import StaffList from "./StaffList";

// TODO: select datas from store to be passed to component such props
function mapStateToProps(state) {
	return {
		staffs: state.staffList,
		departments: state.filter.departments,
	};
}

function Staff({ staffs }) {
	//TODO: defined states for this functional component by using HOOK API "useState"
	const [filtedStaffs, setfiltedStaffs] = useState(staffs);
	const [searchedStaff, setsearchedStaff] = useState(null);

	//TODO: function to get a new array to which elements  match the string we pass
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

	//TODO: update searchedStaffs
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

// TODO: Connect this component to store
export default connect(mapStateToProps)(Staff);
