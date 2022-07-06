import ErrorHandlerInterface from './handler/handler.js';
import MiddlewareError from '../middleware/error-parameters.js';
import Pipe from './pipe.js';
import RouterPipe from '../pipe/pipe.js';
import Context from '../context/context.js';
import Callable from '@alirya/function/callable.js';

export default function Error<CustomMain extends Context>(
    pipe : RouterPipe,
    error : Callable<[globalThis.Error], boolean>,
) :  Pipe<globalThis.Error, CustomMain> {

    return function (middleware : ErrorHandlerInterface<globalThis.Error, CustomMain>) {

        pipe(MiddlewareError(middleware, error));

        return Error(pipe, error);
    };
}
