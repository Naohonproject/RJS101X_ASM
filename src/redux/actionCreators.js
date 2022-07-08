/** @format */
import * as actionTypes from "./actionTypes";
import { baseUrl, staffsSubUrl, deparmentsSubUrl, staffSalarySubUrl } from "../shared/baseUrl";

const handleOnFulfilled = () => (res) => {
	if (res.ok) {
		return res;
	} else {
		var err = new Error("Error" + res.status + ":" + res.statusText);
		err.res = res;
		throw err;
	}
};
const handleOnRejected = () => (err) => {
	var errorMess = new Error(err.message);
	throw errorMess;
};

export const getStaffs = (staffs) => {
	return {
		type: actionTypes.GET_STAFFS,
		payload: staffs,
	};
};

export const loadingStaffs = () => {
	return {
		type: actionTypes.STAFFS_LOADING,
	};
};

export const loadingStaffsFailed = (errMsg) => {
	type: actionTypes.STAFFS_LOADING_FAILED;
	payload: errMsg;
};

export const fetchStaffsFromServer = () => (dispatch) => {
	dispatch(loadingStaffs());
	fetch(baseUrl + staffsSubUrl)
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((staffs) => dispatch(getStaffs(staffs)))
		.catch((err) => dispatch(loadingStaffsFailed(err.message)));
};

export const getDepartments = (deparments) => {
	return {
		type: actionTypes.GET_DEPARTMENTS,
		payload: deparments,
	};
};

export const loadingDepartments = () => {
	return {
		type: actionTypes.DEPARTMENTS_LOADING,
	};
};

export const loadingDepartmentsFailed = (errMsg) => {
	type: actionTypes.DEPARTMENTS_LOADING_FAILED;
	payload: errMsg;
};

export const fetchDepartmentsFromServer = () => (dispatch) => {
	dispatch(loadingDepartments());
	fetch(baseUrl + deparmentsSubUrl)
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((deparments) => dispatch(getDepartments(deparments)))
		.catch((err) => dispatch(loadingDepartmentsFailed(err.message)));
};

export const getSalary = (salary) => {
	return {
		type: actionTypes.GET_SALARY,
		payload: salary,
	};
};

export const loadingSalary = () => {
	return {
		type: actionTypes.SALARY_LOADING,
	};
};

export const loadingSalaryFailed = (errMsg) => {
	type: actionTypes.SALARY_LOADING_FAILED;
	payload: errMsg;
};

export const fetchSalaryFromServer = () => (dispatch) => {
	dispatch(loadingSalary());
	fetch(baseUrl + staffSalarySubUrl)
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((salary) => dispatch(getSalary(salary)))
		.catch((err) => dispatch(loadingSalaryFailed(err.message)));
};

export const addStaff = (staffs) => ({
	type: actionTypes.ADD_STAFF,
	payload: staffs,
});

export const postStaffToServer = (staff) => (dispatch) => {
	fetch(baseUrl + staffsSubUrl, {
		method: "POST",
		body: JSON.stringify(staff),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin",
	})
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((res) => dispatch(addStaff(res)))
		.catch((error) => {
			console.log(error.message);
			alert(+error.message);
		});
};

export const deleteStaff = (staffs) => ({
	type: actionTypes.DELETE_STAFF,
	payload: staffs,
});

export const DeleteStaffToServer = (staffId) => (dispatch) => {
	fetch(`https://rjs101xbackend.herokuapp.com/staffs/${staffId}`, { method: "DELETE" })
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((data) => dispatch(deleteStaff(data)))
		.catch((error) => {
			console.log(error.message);
			alert(+error.message);
		});
};
