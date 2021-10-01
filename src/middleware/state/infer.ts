import Message from "@dikac/t-message/message";
import {Middleware as KoaMiddleware} from "koa";
import {Middleware} from "@koa/router";


declare type Infer<Type> = Type extends Middleware<infer As> ? As : never;
export default Infer;
