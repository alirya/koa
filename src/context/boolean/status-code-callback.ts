import {Context} from "koa";

export default function StatusCodeCallback(
    context : Context,
    validation: (code: number)=> boolean
) : boolean {

    return validation(context.response.status);
}
