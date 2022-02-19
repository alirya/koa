import Context from '../../context/context';
import Middleware from '../../middleware/middleware';
import IsStatusCode from '../../context/boolean/status-code-callback';
import ValidationParameters from "../../middleware/validation-parameters";
import CurryParameters from "@alirya/function/curry-parameters";

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
    )
}
