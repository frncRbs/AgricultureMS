const validateFieldsFor = require('validators/validate.auth.js');
const { sendResponse } = require('server');

const validate = (routeFields) => {
    if (!validateFieldsFor.hasOwnProperty(routeFields)) {
        console.log('Validator is not exits');
    }

    return async(req, res, next) => {
        try {
            const validated = await validateFieldsFor[
                routeFields
            ].validateAsync(req.body, { abortEarly: false });

            req.body = validated;

            next();
        } catch (err) {
            sendResponse({
                res,
                statusCode: 406,
                isSuccess: false,
                message: err.message,
            });
        }
    };
};

module.exports = validate;