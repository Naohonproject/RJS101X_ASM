/** @format */

import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import localStorage from "../localStorage/staffListStorage";

const { getStaffs, updateStaffs } = localStorage;

const initState = {
	filter: {
		departments: DEPARTMENTS,
	},
	staffList: getStaffs(STAFFS),
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "staffList/addStaff":
			const nextState = {
				...state,
				staffList: [...state.staffList, action.payload],
			};
			updateStaffs(nextState.staffList);
			return nextState;
		default:
			return state;
	}
};

export default rootReducer;
