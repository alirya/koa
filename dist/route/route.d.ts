/// <reference types="koa__router" />
import Router from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import { Middleware } from "@koa/router";
export default class Route<StateType = any, CustomType = {}> {
    router: Router<StateType, CustomType>;
    route: Method & Path;
    constructor(router: Router<StateType, CustomType>, route: Method & Path);
    use(middleware: Middleware<StateType, CustomType>): void;
}
