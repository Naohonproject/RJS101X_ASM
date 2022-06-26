/** @format */

import React, { useState, createContext, useEffect, useRef } from "react";

import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import storage from "../localStorage/staffListStorage";

export const StaffContext = createContext();

const initialStaffs = storage.getStaffs(STAFFS);

function StaffProvider({ children }) {
	const [staffs, setStaffs] = useState(initialStaffs);

	const initValue = DEPARTMENTS.map((dept) => {
		let numberOfStaff = 0;
		staffs.forEach((staff) => {
			if (staff.department.id === dept.id) {
				numberOfStaff = numberOfStaff + 1;
			}
		});
		return numberOfStaff;
	});

	const [numberOfStaffs, setNumberOfStaffs] = useState(initValue);

	useEffect(() => {
		storage.updateStaffs(staffs);

		const newNumberOfDeparment = DEPARTMENTS.map((dept) => {
			let numberOfStaff = 0;
			staffs.forEach((staff) => {
				if (staff.department.id === dept.id) {
					numberOfStaff = numberOfStaff + 1;
				}
			});
			return numberOfStaff;
		});
		setNumberOfStaffs(newNumberOfDeparment);
	}, [staffs]);

	const value = {
		staffs,
		setStaffs,
		departments: DEPARTMENTS,
		numberOfStaffs: numberOfStaffs,
	};

	return <StaffContext.Provider value={value}>{children}</StaffContext.Provider>;
}

export default StaffProvider;
