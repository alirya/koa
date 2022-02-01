import Koa, {DefaultContext, DefaultState} from 'koa';
import KoaRouter, {RouterParamContext} from '@koa/router';

// export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {
//
//     <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): KoaRouter<StateR, CustomR>;
// }

export default function Register<
    StateT = DefaultState,
    CustomT = DefaultContext/*,
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>*/
>(
    koa : Koa<StateT, CustomT>,
    router : KoaRouter<StateT, CustomT & RouterParamContext<StateT>>
) : KoaRouter<StateT, CustomT & RouterParamContext<StateT>> {

    koa.use(router.routes());
    koa.use(router.allowedMethods());

    return router;
}
















