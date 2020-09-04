/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "@koa/router";
import Function from "@dikac/t-function/function";
export default function Successful(middleware: Function<[Context, Next], void>): Middleware;
