import Context from "../context/context";
import Middleware from "./middleware";
import Next from "./next";
import ConditionalParameters from "./conditional-parameters";

/**
 * execute middleware if {@param validation} match
 *
 * @param valid
 * @param invalid
 * @param validation
 * @constructor
 */
export default function ConditionalParameter<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    {
        validation,
        valid = Next,
        invalid = Next,
    } : {
        validation : (status:ContextType)=>boolean,
        valid : Middleware<ContextType, ContextTypeN>,
        invalid : Middleware<ContextType, ContextTypeN>
    }
) : Middleware<ContextType, ContextTypeN> {

    return ConditionalParameters(validation, valid, invalid);
}
