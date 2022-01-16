
import Path from '@alirya/http/request/path/path';
import Method from '@alirya/http/request/method/method';
import Koa, {DefaultContext, DefaultState} from 'koa';
import Middleware from '../middleware/middleware';
import Router, {RouterOptions} from '@koa/router';
import Server from '../server/server';
import {Server as HttpServer} from 'http';
import {ListenOptions} from 'net';

// export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {
//
//     <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): Router<StateR, CustomR>;
// }


export default function Extends<
    StateT = DefaultState,
    CustomT = DefaultContext
>(
    from : Router<StateT, CustomT>,
    to : Router<StateT, CustomT>,
) : Router<StateT, CustomT> {

    return from.use(to.routes(), to.allowedMethods());
}
















