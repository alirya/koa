import Router, {RouterParamContext, RouterAllowedMethodsOptions} from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import {DefaultContext, DefaultState} from "koa";
import Middleware from "../middleware/middleware";
import Route from "@dikac/t-http/request/route/route";

export default class DefaultRoute<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext & RouterParamContext<StateMain>,
    ResponseBodyMain = any
> implements Pick<Router<StateMain, CustomMain>, 'allowedMethods'|'routes'> {

    constructor(
        readonly route : Route,
        readonly router : Router<StateMain, CustomMain> = new Router<StateMain, CustomMain>()
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
    ) : DefaultRoute<StateType, CustomType, ResponseBodyType> {

        this.router.register(this.route.path, [this.route.method], middleware);

        return this as
            DefaultRoute<StateType|StateMain, CustomType|CustomMain, ResponseBodyType|ResponseBodyMain> as
            DefaultRoute<StateType, CustomType, ResponseBodyType>;
    }

    routes() : Middleware<StateMain, CustomMain, ResponseBodyMain> {

        return this.router.routes();
    }

    allowedMethods(options?: RouterAllowedMethodsOptions) : Middleware<StateMain, CustomMain, ResponseBodyMain> {

        return this.router.allowedMethods(options);
    }

}


















