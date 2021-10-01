import Log from "@dikac/t-syslog/syslog";
import { Middleware } from "koa";
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
export default function Log(log: Log<[string, any, any]>, severity?: keyof Log, after?: boolean): Middleware;
