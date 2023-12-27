import Context from '../context/context.js';
import Middleware from './middleware.js';
import IsStatusCode from '../context/boolean/status-code-callback.js';
import ValidationParameters from './validation-parameters.js';
import {CurryParameters} from '@alirya/function/curry.js';

/**
 * execute middleware if {@param validation} match
 *
 *
 * @param middleware
 * @param validation
 * @constructor
 */
export default function StatusCode<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    validation : (status:number)=>boolean,
    middleware : Middleware<ContextType, ContextTypeN>,
) : Middleware<ContextType, ContextTypeN> {

    return ValidationParameters(
        CurryParameters(IsStatusCode, validation, 1),
        middleware
    );
}
