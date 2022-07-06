import Koa from 'koa';
import KoaRouter from '@koa/router';
import ApplicationContext from '../context/context.js';
import State from '../context/state/infer.js';

export default function Register<
    CustomMain extends ApplicationContext = ApplicationContext
>(
    koa : Koa,
    router : KoaRouter<State<CustomMain>, CustomMain>
) : KoaRouter<State<CustomMain>, CustomMain> {

    koa.use(router.routes());
    koa.use(router.allowedMethods());

    return router;
}
















