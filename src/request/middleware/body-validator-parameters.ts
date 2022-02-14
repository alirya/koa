import Validator from '@alirya/validator/validator';
import {DefaultState} from 'koa';
import Context from '../../context/context';
import * as Koa from 'koa';
import Middleware from "../../middleware/middleware";

export default function BodyValidatorParameters<
    Body,
    ValidatorType extends Validator<Body>,
    ContextType extends Context<DefaultState, Koa.DefaultContext, { body : Body }>,

>(
    validator : ValidatorType,
    invalid : Middleware<ContextType>
) : Middleware<ContextType> {

    return function (context: ContextType, next) {

        const validatable = validator(context.request.body);

        if(validatable.valid) {

            context.request.body = validatable.value;

            return next();

        } else {

            return invalid(context, next);
        }
    };

}
