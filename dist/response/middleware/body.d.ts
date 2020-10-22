import Context from "../../middleware/context/context";
import { Middleware } from "koa";
/**
 * use resolved {@param subject} value for response body data,
 *
 * on success set status code to 200
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param subject
 */
export default function Body<Subject extends unknown>(subject: (context: Context) => Promise<Subject>): Middleware;
