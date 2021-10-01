import Router from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import {DefaultContext, DefaultState, Middleware} from "koa";

export default class Route<
    StateMain extends DefaultState,
    CustomMain extends DefaultContext,
    ResponseBodyMain = any
> {

    constructor(
        public router : Router<StateMain, CustomMain>,
        public route : Method & Path
    ) {

    }

    use<
        StateType extends DefaultState,
        CustomType extends DefaultContext,
        ResponseBodyType = unknown
    >(
        middleware : Middleware<StateType, CustomType, ResponseBodyType>
    ) : Route<StateType, CustomType, ResponseBodyType> {
        // @ts-ignore
        this.router.register(this.route.path, [this.route.method], middleware);
        // @ts-ignore
        return this as Route<StateType, CustomType, ResponseBodyType>;
    }

}
