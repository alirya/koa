/// <reference types="koa__router" />
import * as Router from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import { Middleware } from "@koa/router";
export default class Route {
    router: Router;
    route: Method & Path;
    constructor(router: Router, route: Method & Path);
    use(middleware: Middleware): void;
}
