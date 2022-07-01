import Context from '../../context/context';
import {Next} from 'koa';
import Middleware from '../../middleware/middleware';

/**
 * set response header
 */
export default function Header<
    ContextType extends Context
>(
    headers : Record<string, string>
) : Middleware<ContextType> {

    return function (context : ContextType, next : Next) {

        context.response.set(headers);

        return next();
    };

}
