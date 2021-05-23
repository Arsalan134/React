import React from "react";
import { Blog } from "../Blog/Blog";
// import { Blogs } from "./../api/collections";
import "./blogsView.css";

export const BlogsView = () => {
	// const blogs = useTracker(() => Blogs.find({}).fetch());

	const blogs = [{}, {}];

	return (
		<div className="blogs">
			<p> count is {blogs.length} </p>
			<h2>Blogs</h2>
			<br />
			<div className="blogs-flex-container">
				{blogs.map((blog) => (
					<Blog key={blog._id} blog={blog} />
				))}
			</div>
		</div>
	);
};
