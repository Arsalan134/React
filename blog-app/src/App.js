import React from "react";
import { BlogsView } from "./BlogsView/BlogsView";
import { HeaderView } from "./Header/HeaderView";
import { LoginForm } from "./Login/LoginForm";
import firebase from "./firebase";

const App = () => {
	return (
		<div className="main">
			{/* <div id="firebaseui-auth-container"></div> */}
			{/* <div id="loader">Loading...</div> */}

			<React.Fragment>
				<HeaderView />
				<BlogsView />
			</React.Fragment>
		</div>
	);
};

export default App;
