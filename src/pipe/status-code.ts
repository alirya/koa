import Router, {RouterParamContext} from '@koa.js/router.js';
import {DefaultContext, DefaultState} from 'koa';
import Middleware from '../middleware/middleware.js';
import StatusCodeMiddleware from '../middleware/status-code.js';
import Pipe from './pipe.js';
import Context from '../context/context.js';
import Infer from '../context/state/infer.js';

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

