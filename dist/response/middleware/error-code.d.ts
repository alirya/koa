/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
/**
 * if body in instanceof {@see Error}, and {@see Code<number>} use code value for status code
 * and status message from {@see Error.message}
 *
 * optionally if body also is {@see Value}, value will be used as response body
 *
 * @param message {@default false}
 * set {@see Error.message} to status message or not
 * @WARNING enable this might leak sensitive error info to public
 */
export default function ErrorCode(message?: boolean): Middleware;
