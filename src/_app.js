const server = require('server');
const controllerV1 = require('apis/v1');
const configs = require('configs');

const controllers = [controllerV1];

/* Run Server */
const _app = () => {
    server.run();
    server.setGlobalMiddlewares(configs.app.globalMiddlewares);
    server.setControllers(controllers);
};

_app();