const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).send({ message: err.message });
    next(err);
};

module.exports = { errorMiddleware };