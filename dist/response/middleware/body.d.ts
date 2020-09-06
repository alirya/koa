/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import { Middleware } from "@koa/router";
/**
 * use resolved {@param subject} value for response body data,
 *
 * on success set status code to 200
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param subject
 * @param argument
 */
export default function Body<Subject extends unknown, Arguments extends unknown[]>(subject: (context: Context, ...argument: Arguments) => Promise<Subject>, ...argument: Arguments): Middleware;
