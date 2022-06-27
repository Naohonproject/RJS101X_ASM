/** @format */
import { createStore } from "redux";
import rootReducer from "./reducer";

// TODO: implement store with rootReducer passed and export out to our app is able to connect
const store = createStore(rootReducer);

export default store;
