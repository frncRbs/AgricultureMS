const ApiError = require('helpers/utils/util.api.error');

const errorHandler = (err, req, res, next) => {
    let error = {...err };

    console.log({ error: error.name, err: err.name });

    error.message = err.message;

    if (err.name === 'CastError') {
        error = new ApiError('Resource not found', 404);
    }

    if (err.name === 'SyntaxError') {
        error = new ApiError('Synax Error', 400);
    }

    if (err.errno === 1062) {
        error = new ApiError('Field Duplicated', 401);
    }
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
        error = new ApiError('JsonWebTokenError', 401);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors)
            .map((error) => error.message)
            .join(', ');
        error = new ApiError(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error',
    });
};

export default errorHandler;