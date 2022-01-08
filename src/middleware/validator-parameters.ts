import Validator from "@dikac/t-validator/simple";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import InferValidatable from "@dikac/t-validator/validatable/infer-validatable";
import Context from "./context/context";
import ApplicationContext from "../context/context";
import Middleware from "./middleware";
import {Optional} from "utility-types";
import {DefaultState} from "koa";

export type ValidatableContextType<ValidatorType, State> =
    Optional<ValidatableContainer<InferValidatable<ValidatorType>>> &
    ApplicationContext<State>

export default function ValidatorParameters<
    State extends DefaultState,
    ContextType extends ValidatableContextType<ValidatorType, State>,
    ResponseBody,
    ValidatorType extends Validator<Context<State, ContextType, ResponseBody>>,
    StateNext extends DefaultState,
    ContextTypeNext extends ApplicationContext<StateNext>,
    ResponseBodyNext,
>(
    validator : ValidatorType,
    invalid : Middleware<State, Required<ContextType>, ResponseBody>
) : Middleware<State, ContextType, ResponseBody, StateNext, ContextTypeNext, ResponseBodyNext> {

    return function (context : Context<State, ContextType, ResponseBody>, next) {

        const validatable = validator(context);

        if(validatable.valid) {

            return next();

        } else {

            context.validatable = validatable as InferValidatable<ValidatorType>;

            return invalid(context as Context<State, Required<ContextType>, ResponseBody>, next);
        }
    }
}
