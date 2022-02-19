import Context from "../context/context";
import Middleware from "./middleware";
import Next from "./next";
import ConditionalCallParameters from "@alirya/function/conditional-call-parameters";
import {Object} from "ts-toolbelt";
import PickDeepParameters from "@alirya/object/value/value/select-path-parameters";

/**
 * execute middleware if {@param validation} match
 *
 * @param valid
 * @param invalid
 * @param properties
 * @param validation
 */
export default function PropertyValidationParameters<
    Properties extends PropertyKey[],
    ContextType extends Context & Object.P.Record<Properties, unknown>,
    ContextTypeN extends Context,
>(
    validation : (context : Object.Path<ContextType, Properties>)=>boolean,
    properties : Properties,
    valid : Middleware<ContextType, ContextTypeN> = Next,
    invalid : Middleware<ContextType, ContextTypeN> = Next,
) : Middleware<ContextType, ContextTypeN> {

    return function (context, next) {

        return ConditionalCallParameters(
            validation(
                PickDeepParameters<Properties, ContextType>(context, ...properties)
            ),
            valid,
            invalid,
            context,
            next
        )

    };
}
