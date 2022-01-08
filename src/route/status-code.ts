import Router, {RouterParamContext} from "@koa/router";
import {DefaultContext, DefaultState} from "koa";
import Middleware from "../middleware/middleware";
import StatusCodeMiddleware from "../response/middleware/status-code";
/*


export default class StatusCode<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>,
    ResponseBodyMain = any
    > {

    constructor(
        public router : Router<StateMain, CustomMain>,
        private statusCode : (code:number) => boolean
    ) {

    }

    use<
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
        >(
        middleware : Middleware<
            StateMain, CustomMain, ResponseBodyMain,
            StateType, CustomType, ResponseBodyType
            >
    ) : StatusCode<StateType, CustomType, ResponseBodyType> {

        this.router.use(StatusCodeMiddleware(this.statusCode, middleware));

        return this as any;
    }

}
*/

export interface Type<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>,
    ResponseBodyMain = any
> {

    <
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
    >(
        middleware : Middleware<
            StateMain, CustomMain, ResponseBodyMain,
            StateType, CustomType, ResponseBodyType
            >
    ) : Type<StateType, CustomType, ResponseBodyType>;
}

export default function StatusCode<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>,
    ResponseBodyMain = any
>(
    router : Router<StateMain, CustomMain>,
    statusCode : (code:number) => boolean
) : Type<StateMain, CustomMain, ResponseBodyMain> {

    return function <
        StateType extends DefaultState,
        CustomType extends DefaultContext & RouterParamContext<StateType>,
        ResponseBodyType = unknown
        >(
            middleware : Middleware<
            StateMain, CustomMain, ResponseBodyMain,
            StateType, CustomType, ResponseBodyType
        >
    ) {

        router.use(StatusCodeMiddleware(statusCode, middleware));

        return StatusCode(router, statusCode)

    } as Type<StateMain, CustomMain, ResponseBodyMain>
}


//
// export type Executor <
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody
//     > = <
//     StateNext extends Koa.DefaultState,
//     ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>,
//     ResponseBodyNext
//     > (middleware : Middleware<State, ContextType, ResponseBody>) => Executor<StateNext, ContextTypeNext, ResponseBodyNext>
//
//
// export default function StatusCode<
//     StateMain extends DefaultState,
//     CustomMain extends DefaultContext & RouterParamContext<StateMain>,
//     ResponseBodyMain = any
//     >(
//     router : Router<StateMain, CustomMain>,
//     statusCode : (code:number) => boolean
// ) :
//     Executor<StateMain, CustomMain, ResponseBodyMain>
// {
//
//     return function<
//         StateNext extends Koa.DefaultState,
//         ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>,
//         ResponseBodyNext
//         > (middleware : Middleware<StateMain, CustomMain, ResponseBodyMain>) {
//
//         router.use(IfStatusCode(statusCode, middleware))
//         return StatusCode(router, statusCode);
//
//     }  as Executor<StateMain, CustomMain, ResponseBodyMain>
//
// }

// function Executor <
//     State extends Koa.DefaultState,
//     ContextType extends Koa.DefaultContext & RouterParamContext<State>,
//     ResponseBody,
//     StateNext extends Koa.DefaultState,
//     ContextTypeNext extends Koa.DefaultContext & RouterParamContext<StateNext>,
//     ResponseBodyNext,
//
//     > (middleware : Middleware<State, ContextType, ResponseBody>) {
//
//     router.use(IfStatusCode(statusCode, middleware))
//     return StatusCode(router, statusCode);
//
// }


//
// function Wrapper() {
//
//
// }
//
// export default class StatusCode<
//     StateMain extends DefaultState,
//     CustomMain extends DefaultContext & RouterParamContext<StateMain>,
//     ResponseBodyMain = any
//     > {
//
//     constructor(
//         public router : Router<StateMain, CustomMain>,
//         public statusCode : (code:number) => boolean
//     ) {
//
//     }
//
//     use<
//         StateType extends DefaultState,
//         CustomType extends DefaultContext & RouterParamContext<StateType>,
//         ResponseBodyType = unknown
//         >(
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
//

