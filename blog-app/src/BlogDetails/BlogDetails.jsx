import { useParams } from "react-router";
import "./BlogDetails.css";

const BlogDetails = () => {
	const { id } = useParams();

	return <div>details {id}</div>;
};

export default BlogDetails;
