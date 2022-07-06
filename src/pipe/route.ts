import Router from '@koa/router';
import Path from '@alirya/http/request/path/path.js';
import Method from '@alirya/http/request/method/method.js';
import Middleware from '../middleware/middleware.js';
import Pipe from './pipe.js';
import ApplicationContext from '../context/context.js';
import State from '../context/state/infer.js';

export default function Route<CustomMain extends ApplicationContext>(
    router : Router<State<CustomMain>, CustomMain>,
    route : Method & Path
) : Pipe<CustomMain> {

    return function (middleware) {

        router.register(route.path, [route.method], middleware as Middleware<CustomMain>);

        return Route(router, route);

    } as Pipe<CustomMain>;

}




















