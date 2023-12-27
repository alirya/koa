import Context from '../context/context.js';
import Middleware from './middleware.js';
import Next from './next.js';
import {ConditionalCallParameters} from '@axiona/function/conditional-call.js';
import {Object} from 'ts-toolbelt';
import {SelectPathParameters} from '@axiona/object/value/value/select-path.js';


/**
 * execute middleware if {@param validation} match
 *
 * @param valid
 * @param invalid
 * @param properties
 * @param validation
 */
export default function ValidationParameters<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    validation : (context : ContextType)=>boolean,
    valid ?: Middleware<ContextType, ContextTypeN>,
    invalid ?: Middleware<ContextType, ContextTypeN>,
) : Middleware<ContextType, ContextTypeN>;

export default function ValidationParameters<
    ContextType extends Context,
    ContextTypeN extends Context,
>(
    validation : (context : ContextType)=>boolean,
    valid ?: Middleware<ContextType, ContextTypeN>,
    invalid ?: Middleware<ContextType, ContextTypeN>,
    ...properties : []
) : Middleware<ContextType, ContextTypeN>;

export default function ValidationParameters<
    Properties extends PropertyKey[],
    ContextType extends Context & Object.P.Record<Properties, unknown>,
    ContextTypeN extends Context,
>(
    validation : (context : Object.Path<ContextType, Properties>)=>boolean,
    valid ?: Middleware<ContextType, ContextTypeN>,
    invalid ?: Middleware<ContextType, ContextTypeN>,
    ...properties : Properties
) : Middleware<ContextType, ContextTypeN>;

export default function ValidationParameters<
    Properties extends PropertyKey[],
    ContextType extends Context & Object.P.Record<Properties, unknown>,
    ContextTypeN extends Context,
>(
    validation : (context : Object.Path<ContextType, Properties>)=>boolean,
    valid : Middleware<ContextType, ContextTypeN> = Next,
    invalid : Middleware<ContextType, ContextTypeN> = Next,
    ...properties : Properties
) : Middleware<ContextType, ContextTypeN> {

    return function (context, next) {

        const value = properties.length !== 0
            ? SelectPathParameters(context, ...properties)
            : context;

        return ConditionalCallParameters(
            validation(value as Object.Path<ContextType, Properties>),
            valid,
            invalid,
            context,
            next
        );
    };
}
