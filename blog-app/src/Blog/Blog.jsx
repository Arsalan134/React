import React from "react";
import "./blog.css";

export const Blog = ({ blog }) => {
	return (
		// <a href="#">
		<div className="blog">
			<img src="/a.jpg" alt="Girl in a jacket" />
			<h3 className="title">{blog.title}</h3>
			<p className="description">{blog.description}</p>
			<footer>4 mins ago</footer>
		</div>
		// </a>
	);
};
