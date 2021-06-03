import React, { useState, useEffect } from "react";
import firebase from "../../firebase";

const BlogModel = () => {
	var blogsReference = firebase.firestore().collection("blogs");
	const [blogs, setBlogs] = useState([]);

	function getBlogs() {
		blogsReference.onSnapshot((querySnapshot) => {
			const blogs = [];
			querySnapshot.forEach((doc) => {
				const blog = doc.data();
				blog.id = doc.id;
				blogs.push(blog);
			});

			// setBlogs(blogs);
		});
	}

	return <div>salam</div>;
};

export default BlogModel;
