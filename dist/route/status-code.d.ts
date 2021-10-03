/// <reference types="koa__router" />
import Router, { RouterParamContext } from "@koa/router";
import { DefaultContext, DefaultState } from "koa";
import Middleware from "../middleware/middleware";
export default class StatusCode<StateMain extends DefaultState, CustomMain extends DefaultContext & RouterParamContext<StateMain>, ResponseBodyMain = any> {
    router: Router<StateMain, CustomMain>;
    private statusCode;
    constructor(router: Router<StateMain, CustomMain>, statusCode: (code: number) => boolean);
    use<StateType extends DefaultState, CustomType extends DefaultContext & RouterParamContext<StateType>, ResponseBodyType = unknown>(middleware: Middleware<StateMain, CustomMain, ResponseBodyMain, StateType, CustomType, ResponseBodyType>): StatusCode<StateType, CustomType, ResponseBodyType>;
}
