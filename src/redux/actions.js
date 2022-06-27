/** @format */
//TODO: difined and export action creater
export const addStaff = (data) => {
	return {
		type: "staffList/addStaff",
		payload: data,
	};
};
