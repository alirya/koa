import Validatable from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Code from "@dikac/t-code/code";
import Context from "../middleware/context/context";
import ValidatableParameters from "./validatable-parameters";

export default function ValidatableParameter(
    {
        context,
        validatable
    } : {
        context: Context,
        validatable : Validatable & Code<number>,
    }
) {

    ValidatableParameters(context, validatable);
}
