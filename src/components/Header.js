/** @format */

import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
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
		this.setState({ isNavOpen: !this.state.isNavOpen });
	}
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img width={55} src={require("../assets/imgs/logo.png")} alt="" />
						</NavbarBrand>
						<Collapse navbar>
							<Nav navbar>
								<NavItem>
									<NavLink to="/staff" className="nav-link">
										<i class="fa-solid fa fa-users"></i> Staff
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/aboutus" className="nav-link">
										<span className="fa fa-university"></span> Department
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/menu" className="nav-link">
										<span className="fa fa-money"></span> Pay Slip
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
