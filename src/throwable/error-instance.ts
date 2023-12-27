import ErrorHandlerInterface from './handler/handler.js';
import MiddlewareError from '../middleware/error-instance-parameters.js';
import Pipe from './pipe.js';
import RouterPipe from '../pipe/pipe.js';
import Context from '../context/context.js';
import Class from '@axiona/class/class.js';

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
    };
}
