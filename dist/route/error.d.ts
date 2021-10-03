import Koa, { DefaultContext, DefaultState } from "koa";
import ErrorHandlerInterface from "../middleware/error-handler/error-handler";
export default class Error<ErrorType extends globalThis.Error, StateMain extends DefaultState, CustomMain extends DefaultContext, ResponseBodyMain = any> {
    koa: Koa<StateMain, CustomMain>;
    readonly error: new () => ErrorType;
    constructor(koa: Koa<StateMain, CustomMain>, error: new () => ErrorType);
    use(middleware: ErrorHandlerInterface<StateMain, CustomMain, ResponseBodyMain>): Error<ErrorType, StateMain, CustomMain, ResponseBodyMain>;
}
