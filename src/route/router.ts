import Koa, {DefaultContext, DefaultState} from 'koa';
import KoaRouter, {RouterOptions} from '@koa/router';

export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {

    <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): KoaRouter<StateR, CustomR>;
}


export default function Router<
    StateT = DefaultState,
    CustomT = DefaultContext
>(
    koa : Koa<StateT, CustomT>,
) : Type<StateT, CustomT> {

    return function<StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions) {

        const router = new KoaRouter<StateR, CustomR>(options);

        koa.use(router.routes());
        koa.use(router.allowedMethods());

        return router;
    };
}
















