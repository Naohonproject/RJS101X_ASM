/** @format */

import React, { Component } from "react";

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
							<img src="../assets/images/logo.jpg" alt="logo" width={50} />
						</NavbarBrand>
						<Collapse navbar>
							<Nav navbar>
								<NavItem>
									<NavLink to="/home" className="nav-link">
										<span className="fa fa-home fa-lg"></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/aboutus" className="nav-link">
										<span className="fa fa-home fa-lg"></span> About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/menu" className="nav-link">
										<span className="fa fa-list fa-lg"></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/contactus" className="nav-link">
										<span className="fa fa-address-card fa-lg"></span> Contact us
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Welcome to The King Restaurant</h1>
								<p>
									Where you are always be served, whoever you are,wherever you come from, whichever
									color you are,Always ready to serve
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;
