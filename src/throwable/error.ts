import ErrorHandlerInterface from './handler/handler';
import MiddlewareError from '../middleware/error-parameters';
import Pipe from './pipe';
import RouterPipe from '../pipe/pipe';
import Context from '../context/context';
import Callable from '@alirya/function/callable';

export default function Error<CustomMain extends Context>(
    pipe : RouterPipe,
    error : Callable<[globalThis.Error], boolean>,
) :  Pipe<globalThis.Error, CustomMain> {

    return function (middleware : ErrorHandlerInterface<globalThis.Error, CustomMain>) {

        pipe(MiddlewareError(middleware, error));

        return Error(pipe, error);
    };
}
