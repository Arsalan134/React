import React, { useState, useEffect } from "react";
import { Blog } from "../Blog/Blog";
import "./blogsView.css";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import BlogModel from "../BlogModel/BlogModel";

export const BlogsView = () => {
	var blogsReference = firebase.firestore().collection("blogs");
	const [blogs, setBlogs] = useState([]);
	// Valid options for source are 'server', 'cache', or
	// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
	// for more information....

	function getBlogs() {
		blogsReference.onSnapshot((querySnapshot) => {
			const blogs = [];
			querySnapshot.forEach((doc) => {
				const blog = doc.data();
				blog.id = doc.id;
				blogs.push(blog);
			});
			setBlogs(blogs);
		});
	}

	useEffect(() => {
		getBlogs();
	}, [blogs]);

	return (
		<div className="blogs">
			<h2>Blogs</h2>

			<div className="blogs-flex-container">
				{blogs.map((blog) => (
					<Link
						key={blog.id}
						to={`/blogs/${blog.id}`}
						style={{ textDecoration: "none" }}
					>
						<Blog blog={blog} />
					</Link>
				))}
			</div>
		</div>
	);
};
