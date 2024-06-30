"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
/**
 * Router class for defining and handling routes and middleware.
 *
 * This class allows you to define routes and middleware for various HTTP methods.
 * It provides methods to add routes for GET, POST, PATCH, PUT, and DELETE requests.
 *
 * @example
 * // Creating and using a router
 * import { Router } from './path/to/your/module.cjs';
 * import { App } from '@oki.gg/unode';
 *
 * const app = new App()
 * const groupRoute = new Router()
 *
 * app.group('/api', groupRoute)
 *
 * const groupRoute
 *   .get('', (req, res) => {
 *     res.send('Hello, World!')
 *   })
 *   .get('/:id', (req, res) => {
 *     const id = req.getParameter(0)
 *     res.send(`Received ID: ${id}`)
 *   })
 *   .post('', async (req, res) => {
 *     const body = await req.parseBody()
 *     res.json(body)
 *   })
 *
 * app.listen(3000, () => {
 *   console.log('Server is running on port 3000');
 * });
 */
class Router {
    constructor() {
        this.routes = [];
        this.middlewares = [];
    }
    addRoute(method, path, handler) {
        this.routes.push({ method, path, handler });
    }
    use(handler) {
        this.middlewares.push(handler);
        return this;
    }
    get(path, handler) {
        this.addRoute('get', path, handler);
        return this;
    }
    post(path, handler) {
        this.addRoute('post', path, handler);
        return this;
    }
    patch(path, handler) {
        this.addRoute('patch', path, handler);
        return this;
    }
    put(path, handler) {
        this.addRoute('put', path, handler);
        return this;
    }
    delete(path, handler) {
        this.addRoute('del', path, handler);
        return this;
    }
}
exports.Router = Router;