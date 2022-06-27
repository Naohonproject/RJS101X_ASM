/** @format */
// TODO: Defined a key which is the key to save our data to local storage
const STAFFS_KEY = "STAFFS";

// TODO: difined and export out get and update data from local storage
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
