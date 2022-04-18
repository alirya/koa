import Validator from '@alirya/validator/simple';
import InferValidatable from '@alirya/validator/validatable/infer-static';
import ApplicationContext from '../context/context';
import Middleware from './middleware';
import {Optional} from 'utility-types';
import {Object} from 'ts-toolbelt';
import Next from "./next";
import Infer from "@alirya/validator/validatable/static/infer";
import PickDeepParameters from "@alirya/object/value/value/select-path-parameters";
import ValidatableContainer from "@alirya/validatable/validatable/Validatable";
import ConditionalCallParameters from "@alirya/function/conditional-call-parameters";
import SetPathParameters from "@alirya/object/set-path-parameters";
import ResponseBody from "../context/response/infer";
import PickPathParameters from "@alirya/object/value/value/select-path-parameters";
import ReplacePath from "@alirya/object/replace-path";

export default function ReplaceParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    BodyTo extends unknown = unknown,
    ContextType extends ApplicationContext & Object.P.Record<Properties, unknown> = ApplicationContext & Object.P.Record<Properties, unknown>,
>(
    filter : (data : Object.Path<ContextType, Properties>, context: ContextType) => BodyTo,
    ...properties : Properties
) : Middleware<ContextType, ReplacePath<ContextType, BodyTo, Properties>> {

    return function (context, next) {

        const value = PickPathParameters<Properties>(context as any, ...properties)

        const filtered = filter(value as any, context);

        SetPathParameters(context as any, filtered, ...properties);

        return next();

    } as Middleware<ContextType, ReplacePath<ContextType, BodyTo, Properties>>;
}
