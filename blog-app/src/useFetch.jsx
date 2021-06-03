import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((res) => {
					if (!res.ok) {
						throw Error("errorrroer");
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name == "AbortError") {
						console.log("fetch aborted");
					} else {
						setIsPending(false);
						setError(err.message);
					}
				});
		}, 1000);
		// effect;
		return () => abortController.abort();
	}, [input]);

	return { data, isPending, error };
};

export default useFetch;
