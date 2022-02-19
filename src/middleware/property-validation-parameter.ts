import Context from "../context/context";
import Middleware from "./middleware";
import Next from "./next";
import ConditionalCallParameters from "@alirya/function/conditional-call-parameters";
import {Object} from "ts-toolbelt";
import PickDeepParameters from "@alirya/object/value/value/select-path-parameters";
import PropertyValidationParameters from "./property-validation-parameters";

/**
 * execute middleware if {@param validation} match
 *
 * @param valid
 * @param invalid
 * @param properties
 * @param validation
 */
export default function PropertyValidationParameter<
    Properties extends PropertyKey[],
    ContextType extends Context & Object.P.Record<Properties, unknown>,
    ContextTypeN extends Context,
>(  {
        validation,
        properties,
        valid = Next,
        invalid = Next
    } : {
        validation : (context : Object.Path<ContextType, Properties>)=>boolean,
        properties : Properties,
        valid : Middleware<ContextType, ContextTypeN>,
        invalid : Middleware<ContextType, ContextTypeN>,
    }
) : Middleware<ContextType, ContextTypeN> {

    return PropertyValidationParameters<Properties, ContextType, ContextTypeN>(
        validation,
        properties,
        valid,
        invalid
    ) as Middleware<ContextType, ContextTypeN>;
}
