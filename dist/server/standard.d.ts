/// <reference types="koa__router" />
/// <reference types="node" />
import Koa, { DefaultContext, DefaultState, Middleware } from "koa";
import Router from "@koa/router";
import { Server as HttpServer } from "http";
import Server from "./server";
export default class Standard<StateT = DefaultState, CustomT = DefaultContext> implements Server<StateT, CustomT> {
    #private;
    private middlewares;
    readonly port: number;
    readonly koa: Koa<StateT, CustomT>;
    readonly route: Router<StateT, CustomT>;
    constructor(middlewares: Middleware[], port: number);
    get server(): HttpServer | undefined;
    open(): void;
    close(): void;
}
