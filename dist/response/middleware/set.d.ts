/// <reference types="koa__router" />
import Response from "@dikac/t-http/response/response";
import { Middleware } from "@koa/router";
/**
 * set {@param response} to response data
 *
 * @param response
 */
export default function Set<Subject extends Response, Arguments extends unknown[]>(response: Subject): Middleware;
