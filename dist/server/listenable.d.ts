/// <reference types="koa__router" />
/// <reference types="node" />
import Koa, { DefaultContext, DefaultState } from "koa";
import Router from "@koa/router";
import Server from "./server";
import { Server as HttpServer } from "http";
export default class Listenable<StateT = DefaultState, CustomT = DefaultContext> implements Server<StateT, CustomT> {
    #private;
    readonly port: number;
    openCallback: (port: number) => void;
    closeCallback: (port: number) => void;
    constructor(server: Server<StateT, CustomT>, port: number, openCallback: (port: number) => void, closeCallback: (port: number) => void);
    get route(): Router<StateT, CustomT>;
    get koa(): Koa<StateT, CustomT>;
    get server(): HttpServer | undefined;
    open(): void;
    close(): void;
}
