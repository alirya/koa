import Router from '@koa/router';
import Path from '@alirya/http/request/path/path';
import Method from '@alirya/http/request/method/method';
import Middleware from '../middleware/middleware';
import Pipe from "./pipe";
import ApplicationContext from "../context/context";
import State from "../context/state/infer";

export default function Route<CustomMain extends ApplicationContext>(
    router : Router<State<CustomMain>, CustomMain>,
    route : Method & Path
) : Pipe<CustomMain> {

    return function (middleware) {

        router.register(route.path, [route.method], middleware as Middleware<CustomMain>);

        return Route(router, route);

    } as Pipe<CustomMain>;

}




















