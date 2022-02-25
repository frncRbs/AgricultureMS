const mysql = require('mysql2');
const configs = require('configs');
const express = require('express');
const ApiError = require('helpers/utils/util.api.error');

class Server {
    _app = express();

    run() {
        this._app.listen(configs.app.port, async () => {
            console.log(
                `\n\n✅ http://${configs.app.host}:${configs.app.port}`
            );
            await this.setConnection();
        });

        // process.setMaxListeners(0);
        process.on('SIGTERM', () => {
            process.close(() => {
                console.log(`Server Terminated.`);
            });
        });
    }

    setGlobalMiddlewares(globalMiddlewares) {
        globalMiddlewares.map((middleware) => {
            this._app.use(middleware);
        });
    }

    setControllers(controllers) {
        controllers.forEach((controller) => {
            this._app.use(controller.path, controller.setRoutes());
        });
    }

    setConnection(query, data) {
        const pool = mysql.createPool(configs.db.mysql);

        return new Promise((resolve, reject) => {
            return pool.getConnection((err, sql) => {
                if (err) {
                    console.log(`❌ Error Connecting to Database `);
                    reject(err);
                }

                console.log(`✔ Database Connected Successfully!`);

                if (query) {
                    sql.query(query, [...data], (err, results) => {
                        if (err) {
                            reject(err);
                        }

                        resolve(results);

                        sql.release();
                    });
                }
            });
        });
    }

    sendResponse({ res, statusCode, isSuccess, message, user = {} }) {
        /* Error Response */
        if (!isSuccess) new ApiError(message, statusCode);

        /* Success Response */
        Object.keys(user).length
            ? res.status(statusCode).json({
                isSuccess,
                message,
                user, // {username, role, isActivated, accessToken}
            })
            : res.status(statusCode).json({
                isSuccess,
                message,
            });
    }
}

const server = new Server();

module.exports = server;
