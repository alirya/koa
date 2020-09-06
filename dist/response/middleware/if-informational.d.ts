/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "@koa/router";
/**
 * use {@param middleware} if response status code is 1xx
 *
 * @param middleware
 */
export default function IfInformational(middleware: (body: Context, next: Next) => void): Middleware;
