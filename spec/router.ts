import KoaRouter from '@koa/router.js';
import Koa from './server.js';

export default function Router() {

    const koa = Koa();

    const router : KoaRouter = new KoaRouter();

    koa.koa.use(router.routes());
    koa.koa.use(router.allowedMethods());

    return  Object.assign(koa, {
        router : router,
    });
}

