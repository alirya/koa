import ApplicationContext from '../context/context.js';
import Middleware from './middleware.js';
import {Object} from 'ts-toolbelt';
import { SetPathParameters } from '@axiona/object/set-path.js';
import {SelectPathParameters} from '@axiona/object/value/value/select-path.js';
import ReplacePath from '@axiona/object/replace-path.js';

export default function ReplaceParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    BodyTo extends unknown = unknown,
    ContextType extends ApplicationContext & Object.P.Record<Properties, unknown> = ApplicationContext & Object.P.Record<Properties, unknown>,
>(
    filter : (data : Object.Path<ContextType, Properties>, context: ContextType) => BodyTo,
    ...properties : Properties
) : Middleware<ContextType, ReplacePath<ContextType, BodyTo, Properties>> {

    return function (context, next) {

        const value = SelectPathParameters<Properties>(context as any, ...properties);

        const filtered = filter(value as any, context);

        SetPathParameters(context as any, filtered, ...properties);

        return next();

    } as Middleware<ContextType, ReplacePath<ContextType, BodyTo, Properties>>;
}
