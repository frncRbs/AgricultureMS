const { Router } = require('express');
const path = require('path');

const asyncHandler = require('middlewares/middleware.async-handler');

const { POST, GET, DELETE, PUT } = require('constants/methods');

const { NODE_ENV } = require('constants/envs');

const authRoutes = require('auth/auth.route');
const adminRoutes = require('admin/admin.route');

class Controller {
    router = Router();

    routes = [...authRoutes, ...adminRoutes];

    path = '/';

    setRoutes() {
        this.routes.forEach((route) => {
            /* Set local middlewares */
            route.localMiddlewares.forEach((localMiddleware) => {
                this.router.use(route.path, localMiddleware);
            });

            switch (route.method) {
                case POST:
                    this.router.post(
                        route.path,
                        asyncHandler(route.controller)
                    );
                    break;
                case GET:
                    this.router.get(route.path, asyncHandler(route.controller));
                    break;
                case DELETE:
                    this.router.delete(
                        route.path,
                        asyncHandler(route.controller)
                    );
                    break;
                case PUT:
                    this.router.patch(
                        route.path,
                        asyncHandler(route.controller)
                    );
                    break;
                default:
                    break;
            }
        });

        return this.router;
    }
}

const controller = new Controller();
module.exports = controller;
