const errorHandler = (error, req, res, next) => {
	console.log(error);
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

	res.status(statusCode).json({ success: false, message: error.message });
};

export default errorHandler;
