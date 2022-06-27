/** @format */

const STAFFS_KEY = "STAFFS";

export default {
	getStaffs(defaultStaffs) {
		const a = JSON.parse(localStorage.getItem(STAFFS_KEY)) || defaultStaffs;
		console.log(a);
		return a;
	},
	updateStaffs(staffs) {
		localStorage.setItem(STAFFS_KEY, JSON.stringify(staffs));
	},
};
