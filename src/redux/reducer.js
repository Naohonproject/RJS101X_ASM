/** @format */

import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import localStorage from "../localStorage/staffListStorage";

const { getStaffs, updateStaffs } = localStorage;

// TODO: initial state, to set ininial state for store, with staffList feild will get data from local state, by default when local storage does not exist the data getstaffs return the STAFFS .
const initState = {
	filter: {
		departments: DEPARTMENTS,
	},
	staffList: getStaffs(STAFFS),
};

// TODO: define rootRuducer for the store
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
