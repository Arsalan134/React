import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "./BlogDetails.css";
import firebase from "../../firebase";

const BlogDetails = () => {
	const { id } = useParams();

	var blogReference = firebase.firestore().collection("blogs").doc(id);
	const [blog, setBlog] = useState({});

	const history = useHistory();

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

	const handleDelete = () => {
		var blogReference = firebase.firestore().collection("blogs");

		blogReference
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
				history.push("/");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	};

	return (
		<div className="blogDetails">
			<img src="/a.jpg" alt="Girl in a jacket" />
			<h1>{blog.title}</h1>
			<p>description: {blog.description}</p>
			<p>body: {blog.body}</p>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default BlogDetails;
