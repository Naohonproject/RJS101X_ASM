/** @format */
import * as actionTypes from "./actionTypes";

// todo : to filt the state of department base on action user dispatch to
export const DepartmentsReducer = (
	state = {
		isLoading: true,
		errMsg: null,
		departments: [],
	},
	action
) => {
	switch (action.type) {
		case actionTypes.DEPARTMENTS_LOADING:
			return {
				...state,
				isLoading: true,
				errMsg: null,
				departments: [],
			};
		case actionTypes.GET_DEPARTMENTS:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				departments: action.payload,
			};
		case actionTypes.DEPARTMENTS_LOADING_FAILED:
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
				departments: [],
			};
		default:
			return state;
	}
};
