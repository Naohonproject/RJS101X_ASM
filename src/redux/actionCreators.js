/** @format */
import * as actionTypes from "./actionTypes";
import { baseUrl, staffsSubUrl, deparmentsSubUrl, staffSalarySubUrl } from "../shared/baseUrl";

// todo : handle response from server
const handleOnFulfilled = () => (res) => {
	if (res.ok) {
		return res;
	} else {
		var err = new Error("Error" + res.status + ":" + res.statusText);
		err.res = res;
		throw err;
	}
};

// todo : handle response from server
const handleOnRejected = () => (err) => {
	var errorMess = new Error(err.message);
	throw errorMess;
};

// action to add staff to store
export const getStaffs = (staffs) => {
	return {
		type: actionTypes.GET_STAFFS,
		payload: staffs,
	};
};

//todo action perform when loading from server
export const loadingStaffs = () => {
	return {
		type: actionTypes.STAFFS_LOADING,
	};
};

//todo: action to throw error to store to render error to user view
export const loadingStaffsFailed = (errMsg) => {
	type: actionTypes.STAFFS_LOADING_FAILED;
	payload: errMsg;
};

//todo: thunk action to return a function which call dispatch inside, this funtion will pass as arg of dispatch instead of action objec
export const fetchStaffsFromServer = () => (dispatch) => {
	dispatch(loadingStaffs());
	fetch(baseUrl + staffsSubUrl)
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((staffs) => dispatch(getStaffs(staffs)))
		.catch((err) => dispatch(loadingStaffsFailed(err.message)));
};

//todo: action to add dept to store
export const getDepartments = (deparments) => {
	return {
		type: actionTypes.GET_DEPARTMENTS,
		payload: deparments,
	};
};

//todo action perform when loading dept from server
export const loadingDepartments = () => {
	return {
		type: actionTypes.DEPARTMENTS_LOADING,
	};
};

//todo: action to throw error to store to render error to user view
export const loadingDepartmentsFailed = (errMsg) => {
	type: actionTypes.DEPARTMENTS_LOADING_FAILED;
	payload: errMsg;
};

//todo: thunk action to return a function which call dispatch inside, this funtion will pass as arg of dispatch instead of action objec
export const fetchDepartmentsFromServer = () => (dispatch) => {
	dispatch(loadingDepartments());
	fetch(baseUrl + deparmentsSubUrl)
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((deparments) => dispatch(getDepartments(deparments)))
		.catch((err) => dispatch(loadingDepartmentsFailed(err.message)));
};

//todo: action to add salary to store
export const getSalary = (salary) => {
	return {
		type: actionTypes.GET_SALARY,
		payload: salary,
	};
};

//todo action perform when loading salary from server
export const loadingSalary = () => {
	return {
		type: actionTypes.SALARY_LOADING,
	};
};
//todo: action to throw error to store to render error to user view
export const loadingSalaryFailed = (errMsg) => {
	type: actionTypes.SALARY_LOADING_FAILED;
	payload: errMsg;
};

//todo: thunk action to return a function which call dispatch inside, this funtion will pass as arg of dispatch instead of action objec
export const fetchSalaryFromServer = () => (dispatch) => {
	dispatch(loadingSalary());
	fetch(baseUrl + staffSalarySubUrl)
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((salary) => dispatch(getSalary(salary)))
		.catch((err) => dispatch(loadingSalaryFailed(err.message)));
};

// todo : action to add new staff array to store, staffs will receive from api when fetch to api with METHOD : POST
export const addStaff = (staffs) => ({
	type: actionTypes.ADD_STAFF,
	payload: staffs,
});

// todo : to post a new staff to server then update the staff state in redux store
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

// todo: to update staff state of store when receive new array of staff after fetch to server with method : DELETE, the api response a new staffs array that did not contain deleted staff

export const deleteStaff = (staffs) => ({
	type: actionTypes.DELETE_STAFF,
	payload: staffs,
});

// todo : to delete staff from server and update staff state in redux store
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

// todo : to update staff state in redux store when receive new staff data from server
export const updateStaff = (staffs) => ({
	type: actionTypes.UPDATE_STAFF,
	payload: staffs,
});

// todo : update a staff to server then take response to update staff state in redux store
export const updateStaffToServer = (updatedStaff) => (dispatch) => {
	fetch(baseUrl + staffsSubUrl, {
		method: "PATCH",
		body: JSON.stringify(updatedStaff),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin",
	})
		.then(handleOnFulfilled(), handleOnRejected())
		.then((res) => res.json())
		.then((data) => dispatch(updateStaff(data)))
		.catch((error) => {
			console.log(error.message);
			alert(+error.message);
		});
};
