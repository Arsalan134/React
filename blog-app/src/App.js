import { BlogsView } from "./UI/BlogsView/BlogsView";
import { HeaderView } from "./UI/Header/HeaderView";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./UI/BlogDetails/BlogDetails";
import NotFound from "./UI/NotFound";
import NewBlog from "./UI/New BLog/NewBlog";

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
						<Route path="/create">
							<NewBlog />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</React.Fragment>
			</div>
		</Router>
	);
};

export default App;
