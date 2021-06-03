import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./BlogDetails.css";

import firebase from "../../firebase";
import { Link } from "react-router-dom";

const BlogDetails = () => {
	const { id } = useParams();

	var blogReference = firebase.firestore().collection("blogs").doc(id);
	const [blog, setBlog] = useState({});

	function getBlog() {
		blogReference
			.get()
			.then((doc) => {
				if (doc.exists) {
					console.log("Document data:", doc.data());
					const blog = doc.data();
					blog.id = doc.id;
					setBlog(blog);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}

	useEffect(() => {
		getBlog();
	}, []);

	return (
		<div>
			<img src="/a.jpg" alt="Girl in a jacket" />
			<h1>{blog.title}</h1>
			<p>{blog.description}</p>
			<p>{blog.text}</p>
		</div>
	);
};

export default BlogDetails;
