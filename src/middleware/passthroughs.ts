import Middleware from './middleware';
import {DefaultState} from 'koa';
import ApplicationContext from '../context/context';
import Context from './context/context';


export default function Passthroughs<
    State extends DefaultState,
    ContextT extends ApplicationContext<State>,
    Response = unknown
>(
    callback : (context : Context<State, ContextT, Response>)=>any
) : Middleware<State, ContextT, Response> {

    return function (context : Context<State, ContextT, Response>, next) {

        callback(context);

        return next();

    } as Middleware<State, ContextT, Response>;
}
