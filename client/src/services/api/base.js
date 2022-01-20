export const BASE_URL =
	process.env.NODE_ENV === "production"
		? "https://shoes-genius-api.herokuapp.com"
		: "http://localhost:5000";
