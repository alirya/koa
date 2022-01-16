import Context from '../../middleware/context/context';
import {DefaultState, Next} from 'koa';
import String from '@alirya/string/boolean/string';

/**
 * set appropriate header for JSON if body is already JSON string
 *
 * @warning
 * this only check the body data type, and does not validate
 * string json
 */
export default function Json<
    State extends DefaultState,
    ContextType extends Context<State>,
    ResponseBody extends string
>(
    context : Context<State, ContextType, ResponseBody>,
    next : Next
) {

    if(String(context.response.body)) {

        context.response.set({'ContenType' : 'application/json'});
    }

    return next();
}
