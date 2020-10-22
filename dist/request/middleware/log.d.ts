import Log from "@dikac/t-syslog/syslog";
import { Middleware } from "koa";
export default function Log(log: Log<[string, any, any]>, severity?: keyof Log): Middleware;
