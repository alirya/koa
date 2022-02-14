import {Context} from "koa";

export default function (context : Context, validation: (code: number)=> boolean) {

    return validation(context.response.status)
}
