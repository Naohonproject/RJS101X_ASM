/** @format */
import { combineReducers } from "redux";

import { DepartmentsReducer } from "./departmentsReducer";
import { SalaryReducer } from "./salaryReducer";
import { StaffsReducer } from "./staffsReducer";

// TODO: define rootRuducer for the store
const rootReducer = combineReducers({
	staffs: StaffsReducer,
	departments: DepartmentsReducer,
	salary: SalaryReducer,
});

export default rootReducer;
