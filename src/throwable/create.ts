import Koa, {DefaultContext, DefaultState} from "koa";
import KoaRouter, {RouterOptions} from '@koa/router.js';
import Register from '../router/register.js';
import ApplicationContext from '../context/context.js';
import State from '../context/state/infer.js';

export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {

    <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): KoaRouter<StateR, CustomR>;
}


export default function Create<
    CustomMain extends ApplicationContext,
>(
    koa : Koa<State<CustomMain>, CustomMain>,
    options ?: RouterOptions
) : KoaRouter<State<CustomMain>, CustomMain>  {

    return Register(koa, new KoaRouter(options));
}
















