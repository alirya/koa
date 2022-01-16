import Router, {RouterParamContext} from '@koa/router';
import Path from '@alirya/http/request/path/path';
import Method from '@alirya/http/request/method/method';
import {DefaultContext, DefaultState} from 'koa';
import Middleware from '../middleware/middleware';
//
// export default class Route<
//     StateMain extends DefaultState,
//     CustomMain extends DefaultContext & RouterParamContext<StateMain>,
//     ResponseBodyMain = any
// > {
//
//     constructor(
//         public router : Router<StateMain, CustomMain>,
//         public route : Method & Path
//     ) {
//
//     }
//
//     use<
//         StateType extends DefaultState,
//         CustomType extends DefaultContext & RouterParamContext<StateType>,
//         ResponseBodyType = unknown
//     >(
//         middleware : Middleware<
//             StateMain, CustomMain, ResponseBodyMain,
//             StateType, CustomType, ResponseBodyType
//             >
//     ) : Route<StateType, CustomType, ResponseBodyType> {
//         // @ts-ignore
//         this.router.register(this.route.path, [this.route.method], middleware);
//         // @ts-ignore
//         return this as Route<StateType, CustomType, ResponseBodyType>;
//     }
//
// }

export interface Type<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>,
    ResponseBodyMain = any
        >  {

    <
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
        >(
        middleware : Middleware<
            StateMain, CustomMain, ResponseBodyMain/*,
            StateType, CustomType, ResponseBodyType*/
            >
    ) : Type<StateType, CustomType, ResponseBodyType>;
}

export default function RouteOri<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>,
    ResponseBodyMain = any
>(
    router : Router<StateMain, CustomMain>,
    route : Method & Path
) : Type<StateMain, CustomMain, ResponseBodyMain> {

    return function <
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
    > (
        middleware : Middleware<
            StateMain, CustomMain, ResponseBodyMain/*,
            StateType, CustomType, ResponseBodyType*/
            >
    ) {

        router.register(route.path, [route.method], middleware);

        return RouteOri(router, route);

    } as Type<StateMain, CustomMain, ResponseBodyMain>;

}




















