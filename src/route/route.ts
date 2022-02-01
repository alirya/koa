import Koa, {DefaultContext, DefaultState} from 'koa';
import KoaRouter, {RouterParamContext} from '@koa/router';
import Route from '@alirya/http/request/route/route';
import Router from './router';

export interface Type<
    StateT extends DefaultState,
    CustomT extends DefaultContext,
    >  {

    <StateR extends StateT, CustomR extends CustomT>(options : Route): KoaRouter<StateR, CustomR & RouterParamContext<StateT>>;
}


export default function Route<
    StateT extends DefaultState,
    CustomT extends DefaultContext
>(
    koa : Koa<StateT, CustomT>,
) : Type<StateT, CustomT> {

    return function<StateR extends StateT, CustomR extends CustomT>(route : Route) {

        return Router(koa)({
            prefix : route.path,
            methods : [route.method]
        });
    };


}
















