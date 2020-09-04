/// <reference types="koa__router" />
import Response from "@dikac/t-http/response/response";
import Context from "../../middleware/context/context";
import { Middleware } from "@koa/router";
export default function Response<Subject extends Response, Arguments extends unknown[]>(subject: (context: Context) => Promise<Subject>): Middleware;
