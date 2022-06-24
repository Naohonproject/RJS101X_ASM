/** @format */
import React, { useRef } from "react";
import { DEPARTMENTS } from "../shared/staffs";
function Filter({ search }) {
	const searchText = useRef();

	function handleOnSearch() {
		const searchValue = searchText.current.value;
		search(searchValue);
	}

	return (
		<div className="row align-items-center mt-4 justify-content-around">
			<h3 className="col-12 col-lg-3 text-center">Staffs</h3>
			<div className="col-12 col-lg-3 align-item-center text-center ">
				<div class="input-group">
					<input
						type="search"
						class="form-control rounded"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="search-addon"
						ref={searchText}
					/>
					<button onClick={handleOnSearch} type="button" class="btn btn-outline-primary ml-2">
						search
					</button>
				</div>
			</div>
			<div className="mt-2 col-12 col-lg-6 row justify-content-around text-center">
				{DEPARTMENTS.map((dept) => {
					return (
						<div key={dept.id}>
							<label className="mr-2" htmlFor={dept.id}>
								{dept.name}
							</label>
							<input value={dept.name} type="checkbox" id={dept.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Filter;
