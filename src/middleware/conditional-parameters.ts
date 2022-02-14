import Context from "../context/context";
import Middleware from "./middleware";
import Next from "./next";

/**
 * execute middleware if {@param validation} match
 *
 * @param valid
 * @param invalid
 * @param validation
 * @constructor
 */
export default function ConditionalParameters<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    validation : (context:ContextType)=>boolean,
    valid : Middleware<ContextType, ContextTypeN> = Next,
    invalid : Middleware<ContextType, ContextTypeN> = Next,
) : Middleware<ContextType, ContextTypeN> {

    return function (context, next) {

        if(validation(context)) {

            return valid(context, next);

        } else {

            return invalid(context, next);
        }
    };
}
