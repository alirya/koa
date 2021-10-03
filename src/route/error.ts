import Router, {RouterParamContext} from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import Koa, {DefaultContext, DefaultState} from "koa";
import Middleware from "../middleware/middleware";
import ErrorHandlerInterface from "../middleware/error-handler/error-handler";
import ErrorHandler from "../middleware/error-handler/error";

export default class Error<
    ErrorType extends globalThis.Error,
    StateMain extends DefaultState,
    CustomMain extends DefaultContext,
    ResponseBodyMain = any
> {

    constructor(
        public koa : Koa<StateMain, CustomMain>,
        readonly error : new ()=>ErrorType,
    ) {

    }

    use(
        middleware : ErrorHandlerInterface<StateMain, CustomMain, ResponseBodyMain>
    ) : Error<ErrorType, StateMain, CustomMain, ResponseBodyMain> {

        this.koa.on('error', ErrorHandler(this.error, middleware))

        return this;
    }

}
