import Message from "@dikac/t-message/message";
import {Middleware as KoaMiddleware} from "koa";
import {Middleware} from "@koa/router";
import * as Koa from "koa";


type Infer<Type> = Type extends Koa.Middleware<any, infer As> ? As : never;
export default Infer;
