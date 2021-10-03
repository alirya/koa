/// <reference types="koa__router" />
import Log from "@dikac/t-syslog/syslog";
import * as Koa from "koa";
import { RouterParamContext } from "@koa/router";
import Middleware from "../../middleware/middleware";
/**
 * call log
 *
 * @param log
 *
 * @param severity
 * default : 'debug'
 *
 * @param after
 */
export default function Log<State extends Koa.DefaultState, ContextType extends Koa.DefaultContext & RouterParamContext<State>, ResponseBody = unknown>(log: Log<[string, any, any]>, severity?: keyof Log, after?: boolean): Middleware<State, ContextType, ResponseBody, State, ContextType, ResponseBody>;
