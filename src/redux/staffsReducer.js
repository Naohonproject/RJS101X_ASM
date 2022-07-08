/** @format */
import * as actionTypes from "./actionTypes";

// todo: to update state of staff base on action user dispatch to

export const StaffsReducer = (
	state = {
		isLoading: true,
		errMsg: null,
		staffs: [],
	},
	action
) => {
	switch (action.type) {
		case actionTypes.ADD_STAFF:
		case actionTypes.DELETE_STAFF:
		case actionTypes.UPDATE_STAFF:
			return {
				...state,
				staffs: action.payload,
			};
		case actionTypes.STAFFS_LOADING:
			return {
				...state,
				isLoading: true,
				errMsg: null,
				staffs: [],
			};
		case actionTypes.GET_STAFFS:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				staffs: action.payload,
			};
		case actionTypes.STAFFS_LOADING_FAILED:
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
				staffs: [],
			};
		default:
			return state;
	}
};
