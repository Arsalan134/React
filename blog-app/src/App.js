import { BlogsView } from "./BlogsView/BlogsView";
import { HeaderView } from "./Header/HeaderView";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails/BlogDetails";

const App = () => {
	return (
		<Router>
			<div className="main">
				<React.Fragment>
					<HeaderView />

					<Switch>
						<Route exact path="/">
							<BlogsView />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="">
							<BlogsView />
						</Route>
					</Switch>
				</React.Fragment>
			</div>
		</Router>
	);
};

export default App;
