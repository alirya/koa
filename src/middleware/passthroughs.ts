import Middleware from './middleware.js';
import ApplicationContext from '../context/context.js';

export default function Passthroughs<
    ContextT extends ApplicationContext,
>(
    callback : (context : ContextT)=>any
) : Middleware<ContextT> {

    return function (context, next) {

        callback(context);

        return next();

    } as Middleware<ContextT>;
}
