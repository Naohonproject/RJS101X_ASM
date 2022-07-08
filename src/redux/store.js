/** @format */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducer";

// TODO: implement store with rootReducer passed and export out to our app is able to connect
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
