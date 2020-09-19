/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
/**
 * set response header
 */
export default function Header(headers: Record<string, string>): Middleware;
