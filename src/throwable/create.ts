import Koa, {DefaultContext, DefaultState} from 'koa';
import KoaRouter, {RouterOptions} from '@koa/router';
import Register from '../router/register';
import ApplicationContext from '../context/context';
import State from '../context/state/infer';

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
















