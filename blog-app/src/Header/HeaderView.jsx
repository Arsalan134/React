import React from "react";
import "./header.css";

export const HeaderView = () => {
	function logout() {}

	return (
		<header>
			<div className="flex-container">
				<div className="leading">
					<p>Leading</p>
				</div>

				<div className="middle">
					<p>mid</p>
				</div>

				<div className="trailing">
					<a href="" onClick={logout}>
						Logout
					</a>
				</div>
			</div>
		</header>
	);
};
