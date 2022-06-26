/** @format */

const STAFFS_KEY = "STAFFS";

export default {
	getStaffs(defaultStaffs) {
		return JSON.parse(localStorage.getItem(STAFFS_KEY)) || defaultStaffs;
	},
	updateStaffs(staffs) {
		localStorage.setItem(STAFFS_KEY, JSON.stringify(staffs));
	},
};
