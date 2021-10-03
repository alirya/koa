import IfStatusCode from "../response/middleware/if-status-code";
export default class StatusCode {
    constructor(router, statusCode) {
        this.router = router;
        this.statusCode = statusCode;
    }
    use(middleware) {
        this.router.use(IfStatusCode(this.statusCode, middleware));
        return this;
    }
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
//# sourceMappingURL=status-code.js.map