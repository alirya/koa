import { Middleware } from "koa";
/**
 * if body in instanceof {@see Error} set response message from {@see Error.message}
 *
 * and also according to following
 * - if also instanceof {@see Code<number>} use code value for status code
 * - if also instanceof {@see Value}, value will be used as response body
 * - if also instanceof {@see Body}, body will be used as response body, {@see Value}, takes priority
 */
export default function ErrorResponse(): Middleware;
