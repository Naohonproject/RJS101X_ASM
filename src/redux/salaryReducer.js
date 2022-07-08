/** @format */
import * as actionTypes from "./actionTypes";

export const SalaryReducer = (
	state = {
		isLoading: true,
		errMsg: null,
		salary: [],
	},
	action
) => {
	switch (action.type) {
		case actionTypes.SALARY_LOADING:
			return {
				...state,
				isLoading: true,
				errMsg: null,
				salary: [],
			};
		case actionTypes.GET_SALARY:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				salary: action.payload,
			};
		case actionTypes.SALARY_LOADING_FAILED:
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
				salary: [],
			};
		default:
			return state;
	}
};
