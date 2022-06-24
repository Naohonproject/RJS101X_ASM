/** @format */
import Staff from "../components/Staff";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

const initState = {
	filter: {
		search: "",
		departments: DEPARTMENTS,
	},
	StaffList: STAFFS,
};
const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "staffList/addStaff":
			return {
				...state,
				StaffList: [...state.StaffList, action.pauload],
			};
		default:
			return state;
	}
};

export default rootReducer;
