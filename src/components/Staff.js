/** @format */

import React, { useState } from "react";

import Filter from "./Filter";
import StaffList from "./StaffList";
import { Loading } from "./Loading";

function Staff({ staffs, departments, postStaff, deleteStaff }) {
	if (staffs.isLoading || departments.isLoading) {
		return <Loading />;
	} else {
		const [filtedStaffs, setfiltedStaffs] = useState(staffs.staffs);
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
					postStaff={postStaff}
					departments={departments.departments}
					search={search}
					setsearchedStaff={setsearchedStaff}
					setfiltedStaffs={setfiltedStaffs}
					staffs={staffs.staffs}
				/>
				<hr />
				<StaffList deleteStaff={deleteStaff} staffsList={searchedStaff || filtedStaffs} />
			</React.Fragment>
		);
	}
}

export default Staff;
