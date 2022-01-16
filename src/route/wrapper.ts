// import Router, {RouterParamContext, RouterAllowedMethodsOptions} from "@koa/router";
// import Path from "@alirya/http/request/path/path";
// import Method from "@alirya/http/request/method/method";
// import {DefaultContext, DefaultState} from "koa";
// import Middleware from "../middleware/middleware";
// import Route from "@alirya/http/request/route/route";
// //
// // export default class DefaultRoute<
// //     StateMain extends DefaultState,
// //     CustomMain extends DefaultContext & RouterParamContext<StateMain>,
// //     ResponseBodyMain = any
// // > implements Pick<Router<StateMain, CustomMain>, 'allowedMethods'|'routes'> {
// //
// //     constructor(
// //         readonly route : Route,
// //         readonly router : Router<StateMain, CustomMain> = new Router<StateMain, CustomMain>()
// //     ) {
// //
// //     }
// //
// //     use<
// //         StateType extends DefaultState,
// //         CustomType extends DefaultContext & RouterParamContext<StateType>,
// //         ResponseBodyType = unknown
// //     >(
// //         middleware : Middleware<
// //             StateMain, CustomMain, ResponseBodyMain,
// //             StateType, CustomType, ResponseBodyType
// //         >
// //     ) : DefaultRoute<StateType, CustomType, ResponseBodyType> {
// //
// //         this.router.register(this.route.path, [this.route.method], middleware);
// //
// //         return this as
// //             DefaultRoute<StateType|StateMain, CustomType|CustomMain, ResponseBodyType|ResponseBodyMain> as
// //             DefaultRoute<StateType, CustomType, ResponseBodyType>;
// //     }
// //
// //     routes() : Middleware<StateMain, CustomMain, ResponseBodyMain> {
// //
// //         return this.router.routes();
// //     }
// //
// //     allowedMethods(options?: RouterAllowedMethodsOptions) : Middleware<StateMain, CustomMain, ResponseBodyMain> {
// //
// //         return this.router.allowedMethods(options);
// //     }
// //
// // }
// //
// //
// //
//
//
//
//
// export default class Wrapper<
//     StateMain extends DefaultState,
//     CustomMain extends DefaultContext & RouterParamContext<StateMain>,
//     ResponseBodyMain = any
// > implements Router<StateMain, CustomMain>  {
//
//     constructor(readonly router : Router<StateMain, CustomMain>) {
//     }
//
//     all<T = {}, U = {}>(
//         name: string,
//         path: string | RegExp,
//         ...middleware: Array<Router.Middleware<StateMain & T, CustomMain & U>>
//     ): Router<StateMain, CustomMain>;
//     all<T = {}, U = {}>(
//         path: string | RegExp | Array<string | RegExp>,
//         ...middleware: Array<Router.Middleware<StateMain & T, CustomMain & U>>
//     ): Router<StateMain, CustomMain>;
//     all<T, U>(name: string, path: string | RegExp | Router.Middleware<StateMain & T, CustomMain & U>, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//
//         this.router.all<T, U>(...arguments as Parameters<Router['all']>);
//         return this as Router<StateMain, CustomMain>;
//     }
//
//     allowedMethods(options: Router.RouterAllowedMethodsOptions | undefined): Router.Middleware<StateMain, CustomMain> {
//
//         this.router.allowedMethods(options);
//         return this;
//     }
//
//     del<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     delete<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     get<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     head<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     link<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     match(path: string, method: string): Router.RoutesMatch {
//         return undefined;
//     }
//
//     methods: string[];
//
//     middleware(): Router.Middleware<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     options<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     opts: Router.RouterOptions;
//
//     param(param: string, middleware: Router.ParamMiddleware): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     params: object;
//
//     patch<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     post<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     prefix(prefix: string): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     put<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     redirect(source: string, destination: string, code: number | undefined): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     register(path: string | RegExp, methods: string[], middleware: Router.Middleware<StateMain, CustomMain> | Array<Router.Middleware<StateMain, CustomMain>>, opts: Router.LayerOptions | undefined): Router.Layer {
//         return undefined;
//     }
//
//     route(name: string): Router.Layer | boolean {
//         return undefined;
//     }
//
//     routes(): Router.Middleware<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     stack: Router.Layer[];
//
//     unlink<T, U>(name: string, path: string | RegExp, middleware: Router.Middleware<StateMain & T, CustomMain & U>): Router<StateMain, CustomMain> {
//         return undefined;
//     }
//
//     url(name: string, params: any, options: Router.UrlOptionsQuery | undefined): Error | string {
//         return undefined;
//     }
//
//     use(path: string | string[] | RegExp, middleware: Router.Middleware<StateMain, CustomMain>): Router<StateMain, CustomMain> {
//
//         return this.router.use(path, middleware);
//     }
//
//
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
