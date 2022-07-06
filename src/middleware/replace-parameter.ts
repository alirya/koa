import ApplicationContext from '../context/context.js';
import Middleware from './middleware.js';
import {Object} from 'ts-toolbelt';
import ReplacePath from '@alirya/object/replace-path.js';
import ReplaceParameters from './replace-parameters.js';


export default function ReplaceParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    BodyTo extends unknown = unknown,
    ContextType extends ApplicationContext & Object.P.Record<Properties, unknown> = ApplicationContext & Object.P.Record<Properties, unknown>,
>( {
        filter,
        properties
    } : {
        filter : (data : Object.Path<ContextType, Properties>, context: ContextType) => BodyTo,
        properties : Properties,
    }
) : Middleware<ContextType, ReplacePath<ContextType, BodyTo, Properties>> {

    return ReplaceParameters<Properties, BodyTo, ContextType>(filter, ...properties);
}
