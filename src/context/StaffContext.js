/** @format */

import React, { useState, createContext, useEffect } from "react";

import { STAFFS } from "../shared/staffs";
import storage from "../localStorage/staffListStorage";

export const StaffContext = createContext();

const initialStaffs = storage.getStaffs(STAFFS);

function StaffProvider({ children }) {
	const [staffs, setStaffs] = useState(initialStaffs);
	
	useEffect(() => {
		storage.updateStaffs(staffs);
	}, [staffs]);

	const value = {
		staffs,
		setStaffs,
	};
	return <StaffContext.Provider value={value}>{children}</StaffContext.Provider>;
}

export default StaffProvider;
