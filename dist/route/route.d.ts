/// <reference types="koa__router" />
import Router from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import { DefaultContext, DefaultState, Middleware } from "koa";
export default class Route<StateMain extends DefaultState, CustomMain extends DefaultContext, ResponseBodyMain = any> {
    router: Router<StateMain, CustomMain>;
    route: Method & Path;
    constructor(router: Router<StateMain, CustomMain>, route: Method & Path);
    use<StateType extends DefaultState, CustomType extends DefaultContext, ResponseBodyType = unknown>(middleware: Middleware<StateType, CustomType, ResponseBodyType>): Route<StateType, CustomType, ResponseBodyType>;
}
