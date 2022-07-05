import Router, {RouterParamContext} from '@koa/router';
import {DefaultContext, DefaultState} from 'koa';
import Middleware from '../middleware/middleware';
import StatusCodeMiddleware from '../middleware/status-code';
import Pipe from './pipe';
import Context from '../context/context';
import Infer from '../context/state/infer';

export default function StatusCode<CustomMain extends Context>(
    router : Router<Infer<CustomMain>, CustomMain>,
    statusCode : (code:number) => boolean
) : Pipe<CustomMain> {

    return function <
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
    >(
            middleware : Middleware<CustomMain>
    ) {

        router.use(StatusCodeMiddleware(statusCode, middleware));

        return StatusCode(router, statusCode);

    } as Pipe<CustomMain>;
}

