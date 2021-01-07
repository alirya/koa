import { Middleware } from "koa";
/**
 * if body in instanceof {@see Error} set response message from {@see Error.message}
 *
 * and also according to following
 * - if also instanceof {@see Code<number>} use code value for status code
 *
 * {@see Error.message} used as http message
 * {@see Error.stack} used as http body
 */
export default function ErrorResponse(filter?: (error: globalThis.Error) => globalThis.Error): Middleware;
