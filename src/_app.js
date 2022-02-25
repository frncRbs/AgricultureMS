const server = require('server');
const controllerV1 = require('apis/v1');
const configs = require('configs');

/* Run Server */
const _app = () => {
    server.run();
    server.setGlobalMiddlewares(configs.app.globalMiddlewares);
    server.setControllers([controllerV1]);
};

_app();