/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
/**
 * if body in instanceof {@see Error}, set status code to 500, and
 * replace body with error message
 *
 * @WARNING this will leak error message to public
 *
 * @param message {@default false}
 * set {@see Error.message} to response body or not
 * @WARNING enable this might leak sensitive error info to public
 */
export default function Error(message?: boolean): Middleware;
