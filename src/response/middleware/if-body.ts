import {Middleware} from 'koa';
import {Next, Response} from 'koa';
import Body from '@alirya/http/body/body';
import Context from '../../middleware/context/context';
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
//
// export default function IfBody<
//     State extends DefaultState = DefaultState,
//     ContextType extends DefaultContext = DefaultContext,
//     ResponseBody = unknown,
//     NewResponseBody = unknown,
//
// >(
//     validation : (body : ResponseBody) => boolean,
//     middleware : Middleware<State, ContextType, NewResponseBody>
// ) : Middleware<Middleware<State, ContextType, NewResponseBody|ResponseBody>> {
//
//     return function (context : Context<ContextType, ResponseBody,NewResponseBody>, next : Next) {
//
//         if(validation(context.response.body as ResponseBody)) {
//
//             return middleware(context, next);
//
//         } else {
//
//             return next();
//         }
//     } as Middleware<State, ContextType, NewResponseBody|ResponseBody>;
//
//
// }
