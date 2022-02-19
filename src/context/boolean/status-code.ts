import {Context} from "koa";

export default function StatusCodeCallback(
    context : Context,
    code: number
) : boolean {

    return context.response.status === code;
}
