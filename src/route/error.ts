// import Koa, {DefaultContext, DefaultState} from "koa";
// import ErrorHandlerInterface from "../middleware/error-handler/error-handler";
// import Router, {RouterParamContext} from "@koa/router";
// import Path from "@alirya/http/request/path/path";
// import Method from "@alirya/http/request/method/method";
// import Middleware from "../middleware/middleware";
// import MiddlewareError from "../middleware/error-parameters";
//
// // export default class Error<
// //     ErrorType extends globalThis.Error,
// //     StateMain extends DefaultState,
// //     CustomMain extends DefaultContext,
// //     ResponseBodyMain = any
// // > {
// //
// //     constructor(
// //         public koa : Koa<StateMain, CustomMain>,
// //         readonly error : new ()=>ErrorType,
// //     ) {
// //
// //     }
// //
// //     use(
// //         middleware : ErrorHandlerInterface<ErrorType, StateMain, CustomMain, ResponseBodyMain>
// //     ) : Error<ErrorType, StateMain, CustomMain, ResponseBodyMain> {
// //
// //         this.koa.on('error', ErrorHandler(middleware, this.error))
// //
// //         return this;
// //     }
// // }
//
//
// export interface Type<
//     ErrorType extends globalThis.Error,
//     StateMain extends DefaultState,
//     CustomMain extends DefaultContext,
//     ResponseBodyMain = any
//     >  {
//
//     <
//         StateType extends DefaultState,
//         CustomType extends DefaultContext & RouterParamContext<StateType>,
//         ResponseBodyType = unknown
//         >(
//         middleware : ErrorHandlerInterface<ErrorType, StateMain, CustomMain, ResponseBodyMain>
//     ) : Type<ErrorType, StateMain, CustomMain, ResponseBodyMain>
// }
//
// export default function Error<
//     ErrorType extends globalThis.Error,
//     StateMain extends DefaultState,
//     CustomMain extends DefaultContext & RouterParamContext<StateMain>,
//     ResponseBodyMain = any
// >(
//     router : Pick<Router<StateMain, CustomMain>, 'use'>,
//     error : new ()=>ErrorType,
// ) :  Type<ErrorType, StateMain, CustomMain, ResponseBodyMain> {
//
//     return function (middleware : ErrorHandlerInterface<ErrorType, StateMain, CustomMain, ResponseBodyMain>) {
//
//         router.use(MiddlewareError(middleware, error));
//
//         return Error(router, error);
//     }
// }
