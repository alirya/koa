import ErrorHandlerInterface from "./handler/handler";
import MiddlewareError from "../middleware/error-instance-parameters";
import Pipe from "./pipe";
import RouterPipe from "../pipe/pipe";
import Context from "../context/context";
import Class from "@alirya/class/class";

export default function Error<
    ErrorType extends globalThis.Error,
    CustomMain extends Context,
>(
    pipe : RouterPipe,
    error : Class<ErrorType>,
) :  Pipe<ErrorType, CustomMain> {

    return function (middleware : ErrorHandlerInterface<ErrorType, CustomMain>) {

        pipe(MiddlewareError(middleware, error));

        return Error(pipe, error);
    }
}
