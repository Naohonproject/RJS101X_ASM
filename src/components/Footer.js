/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4 offset-1 col-sm-2">
						<h5>Link</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/staff">Staff</Link>
							</li>
							<li>
								<Link to="/dept">Department</Link>
							</li>
							<li>
								<Link to="/pay">PaySlip</Link>
							</li>
						</ul>
					</div>
					<div className="col-7 col-sm-5">
						<h3>About Us</h3>
						<h4>EMEC CO. LTD</h4>
						<address>Địa chỉ: VJ9R+6PF, Đường An Trì, Hùng Vương, Hồng Bàng, Hải Phòng</address>
						<i className="fa fa-phone fa-lg">
							<span style={{ marginLeft: "20px" }}>0379496709</span>
						</i>
						<br />
						<i className="fa fa-fax fa-lg">
							<span style={{ marginLeft: "20px" }}>+845648692</span>
						</i>
						<br />

						<i className="fa fa-envelope fa-lg">
							<a href="">
								<span style={{ marginLeft: "20px" }}>ltb.199x@outlook.com</span>
							</a>
						</i>
					</div>
					<div className="col-12 col-sm-4 align-self-center">
						<div className="text-center">
							<a
								style={{ margin: "4px" }}
								className="btn btn-social-icon btn-google"
								href="http://google.com/+">
								<i className="fa fa-google-plus"></i>
							</a>
							<a
								style={{ margin: "4px" }}
								className="btn btn-social-icon btn-facebook"
								href="http://www.facebook.com/profile.php?id=">
								<i className="fa fa-facebook"></i>
							</a>
							<a
								style={{ margin: "4px" }}
								className="btn btn-social-icon btn-linkedin"
								href="http://www.linkedin.com/in/">
								<i className="fa fa-linkedin"></i>
							</a>
							<a
								style={{ margin: "4px" }}
								className="btn btn-social-icon btn-twitter"
								href="http://twitter.com/">
								<i className="fa fa-twitter"></i>
							</a>
							<a
								style={{ margin: "4px" }}
								className="btn btn-social-icon btn-google"
								href="http://youtube.com/">
								<i className="fa fa-youtube"></i>
							</a>
							<a style={{ margin: "4px" }} className="btn btn-social-icon" href="mailto:">
								<i className="fa fa-envelope-o"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
