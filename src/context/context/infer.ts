import Message from "@dikac/t-message/message";
import {Middleware as KoaMiddleware} from "koa";
import {Middleware} from "@koa/router";
import * as Koa from "koa";
import Context from "../../middleware/context/context";


type Infer<Type> = Type extends Context<any, infer As> ? As : never;
export default Infer;
