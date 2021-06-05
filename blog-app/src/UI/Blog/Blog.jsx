import React from "react";
import "./blog.css";

import moment from "moment";

export const Blog = ({ blog }) => {
	return (
		<div className="blog">
			<img src="/a.jpg" alt="Girl in a jacket" />
			<h3 className="title">{blog.title}</h3>
			<p className="description">{blog.description}</p>
			<footer>
				<span>{blog.author}</span>
				<span>{moment().to(new Date(blog.createdAt.seconds * 1000))}</span>
			</footer>
		</div>
	);
};
