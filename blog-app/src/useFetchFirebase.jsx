// import { useState, useEffect } from "react";
// import firebase from "./firebase";

// // var blogsReference = firebase.firestore().collection("blogs");
// // const [blogs, setBlogs] = useState([]);
// // Valid options for source are 'server', 'cache', or
// // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// // for more information....

// // useEffect(() => {
// // 	getBlogs();
// // });

// const useFetchFirebase = (collection) => {
// 	const [data, setData] = useState(null);
// 	const [isPending, setIsPending] = useState(false);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const abortController = new AbortController();
// 		// setTimeout(() => {
// 		firebase
// 			.firestore()
// 			.collection(collection)
// 			.onSnapshot(
// 				(querySnapshot) => {
// 					const blogs = [];
// 					querySnapshot.forEach((doc) => {
// 						const blog = doc.data();
// 						blog.id = doc.id;
// 						blogs.push(blog);
// 					});
// 					console.log("Salam");
// 					setData(blogs);
// 					setIsPending(false);
// 					setError(null);
// 				},
// 				{ signal: abortController.signal }
// 			)
// 			.catch((err) => {
// 				if (err.name === "AbortError") {
// 					console.log("fetch aborted");
// 				} else {
// 					setIsPending(false);
// 					setError(err.message);
// 				}
// 			});

// 		// fetch(url, { signal: abortController.signal }).then((res) => {
// 		// 	if (!res.ok) {
// 		// 		throw Error("errorrroer");
// 		// 	}
// 		// 	return res.json();
// 		// });
// 		// }, 1000);
// 		// effect;
// 		return () => abortController.abort();
// 	}, []);

// 	return { data, isPending, error };
// };

// export default useFetchFirebase;
