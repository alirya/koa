import {Context} from 'koa';

export default function StatusCode(
    context : Context,
    code: number
) : boolean {

    return context.response.status === code;
}
