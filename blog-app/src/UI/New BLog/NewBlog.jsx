import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase";

const NewBlog = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsPending(true);

		// go back
		// history.go(-1);

		var blogReference = firebase.firestore().collection("blogs");

		var user = firebase.auth().currentUser;

		blogReference
			.add({
				title,
				body,
				description: "test description",
				author: user.displayName,
				createdAt: new Date(),
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
				setIsPending(false);
				history.push("/");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				setIsPending(false);
			});
	};

	return (
		<div className="create">
			<h2>Create New Blog</h2>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="">Blog Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="">Blog Body</label>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>

				<label htmlFor="">Blog Author</label>
				<select
					name=""
					id=""
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="mario">mario</option>
					<option value="xuy">xuy</option>
				</select>

				{!isPending && <button>Add blog</button>}
				{isPending && <button>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default NewBlog;
