import {Middleware} from 'koa';
import {Next, Response} from 'koa';
import Body from '@alirya/http/body/body';
import Context from '../../context/context';
/**
 * use {@param middleware} if response body is valid against {@param validation}
 *
 * @param validation
 * @param middleware
 */
export default function IfBody<
    BodyType = unknown,
    ResponseType extends Response & Body<BodyType> = Response & Body<BodyType>,
>(
    validation : (body : ResponseType['body']) => boolean,
    middleware : Middleware
) : Middleware {

    return function (context : Context, next : Next) {

        if(validation(context.response.body as ResponseType['body'])) {

            return middleware(context, next);

        } else {

            return next();
        }
    };
}
