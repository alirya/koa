/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
import Context from "./context/context";
export default function Filter<Return = unknown, Arguments extends unknown[] = unknown[]>(filter: (body: Context, ...argument: Arguments) => void, ...argument: Arguments): Middleware;
