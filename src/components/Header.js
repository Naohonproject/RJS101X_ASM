/** @format */

import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}
	toggleNav() {
		console.log(1);
		this.setState({ isNavOpen: !this.state.isNavOpen });
	}
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="">
							<img width={55} src={require("../assets/images/logo.png")} alt="" />
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink to="/staff" className="nav-link">
										<i class="fa-solid fa fa-users"></i> Staff
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/dept" className="nav-link">
										<span className="fa fa-university"></span> Department
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/pay" className="nav-link">
										<span className="fa fa-money"></span> Salary
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;
