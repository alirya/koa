import Middleware from './middleware';
import ApplicationContext from '../context/context';

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
