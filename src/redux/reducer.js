/** @format */

import { STAFFS, DEPARTMENTS } from "../shared/staffs";

const initState = {
	filter: {
		search: "",
		departments: DEPARTMENTS,
	},
	staffList: STAFFS,
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "staffList/addStaff":
			return {
				...state,
				staffList: [...state.staffList, action.payload],
			};
		default:
			return state;
	}
};

export default rootReducer;
