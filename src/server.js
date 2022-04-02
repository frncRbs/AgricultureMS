const mysql = require('mysql2');
const configs = require('configs');
const express = require('express');
const ApiError = require('helpers/utils/util.api.error');
const path = require('path');
const { NODE_ENV } = require('constants/envs');

class Server {
    _app = express();

    run() {
        this._app.listen(configs.app.port, async () => {
            console.log(
                `\n\n✅ http://${configs.app.host}:${configs.app.port}`
            );
            await this.setConnection();
        });

        process.setMaxListeners(0);
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
        // if (NODE_ENV === 'production') {
        //     this._app.use(
        //         express.static(path.join(__dirname, '/client/build'))
        //     );
        //     this._app.get('*', (req, res) => {
        //         res.sendFile(
        //             path.resolve(__dirname, 'client', 'build', 'index.html')
        //         );
        //     });
        // } else {
        controllers.forEach((controller) => {
            this._app.use(controller.path, controller.setRoutes());
        });
        // }
    }

    setConnection(query, data) {
        const db = mysql.createPool(configs.db.mysql);

        return new Promise((resolve, reject) => {
            return db.getConnection((err, sql) => {
                if (err) {
                    reject(err);
                }

                if (query) {
                    sql.query(query, data && [...data], (err, results) => {
                        if (err) reject(err);
                        else resolve(results);

                        sql.release();
                    });
                }
            });
        });
    }

    sendResponse({
        res,
        statusCode,
        isSuccess,
        message,
        data = {} || [],
        user = {},
    }) {
        /* Error Response */
        if (!isSuccess) new ApiError(message, statusCode);

        /* Success Response */
        Object.keys(user).length
            ? res.status(statusCode).json({
                  isSuccess,
                  message,
                  user, // {username, role, isActivated, accessToken}
              })
            : Object.keys(data).length
            ? res.status(statusCode).json({
                  isSuccess,
                  message,
                  data, // {}
              })
            : res.status(statusCode).json({
                  isSuccess,
                  message,
              });
    }
}

const server = new Server();

module.exports = server;
