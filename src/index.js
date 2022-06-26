/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StaffProvider from "./context/StaffContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StaffProvider>
			<App />
		</StaffProvider>
	</React.StrictMode>
);

reportWebVitals();
