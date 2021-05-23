import React, { useState, useEffect } from "react";
import { Blog } from "../Blog/Blog";
import "./blogsView.css";
import firebase from "../firebase";

export const BlogsView = () => {
	var blogsReference = firebase.firestore().collection("blogs");
	const [blogs, setBlogs] = useState([]);
	// Valid options for source are 'server', 'cache', or
	// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
	// for more information....

	function getBlogs() {
		var getOptions = {
			source: "cache",
		};

		blogsReference.onSnapshot((querySnapshot) => {
			const blogs = [];
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				blogs.push(doc.data());
			});
			setBlogs(blogs);
			console.log("got blogs");
		});
	}

	useEffect(() => {
		getBlogs();
	}, []);

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
