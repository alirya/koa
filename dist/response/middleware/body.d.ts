/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import { Middleware } from "@koa/router";
export default function Body<Subject extends unknown, Arguments extends unknown[]>(subject: (context: Context, ...argument: Arguments) => Promise<Subject>, ...argument: Arguments): Middleware;
