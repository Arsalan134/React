import { Blogs } from "../../api/collections";

export const BlogForm = ({ user }) => {
	const [title, setTitle] = setTitle("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text) return;

		Blogs.insert({
			title: title.trim(),
			createdAt: new Date(),
			userId: user._id,
		});

		setTitle("");
	};
};
