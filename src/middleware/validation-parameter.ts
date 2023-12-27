import Context from '../context/context.js';
import Middleware from './middleware.js';
import Next from './next.js';
import {Object} from 'ts-toolbelt';
import ValidationParameters from './validation-parameters.js';

/**
 * execute middleware if {@param validation} match
 *
 * @param valid
 * @param invalid
 * @param properties
 * @param validation
 */
export default function ValidationParameter<
    ContextType extends Context,
    ContextTypeN extends Context,
>(  {
        validation,
        properties,
        valid,
        invalid
    } : {
        validation : (context : ContextType)=>boolean,
        properties ?: [],
        valid : Middleware<ContextType, ContextTypeN>,
        invalid : Middleware<ContextType, ContextTypeN>,
    }
) : Middleware<ContextType, ContextTypeN>;

export default function ValidationParameter<
    Properties extends PropertyKey[],
    ContextType extends Context & Object.P.Record<Properties, unknown>,
    ContextTypeN extends Context,
>(  {
        validation,
        properties,
        valid,
        invalid
    } : {
        validation : (context : Object.Path<ContextType, Properties>)=>boolean,
        properties : Properties,
        valid : Middleware<ContextType, ContextTypeN>,
        invalid : Middleware<ContextType, ContextTypeN>,
    }
) : Middleware<ContextType, ContextTypeN>;

export default function ValidationParameter<
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

    return ValidationParameters<Properties, ContextType, ContextTypeN>(
        validation,
        valid,
        invalid,
        ...properties ?? [],
    ) as Middleware<ContextType, ContextTypeN>;
}
