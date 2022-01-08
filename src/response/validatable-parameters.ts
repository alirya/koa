import Validatable from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Code from "@dikac/t-code/code";
import Context from "../middleware/context/context";

export default function ValidatableParameters(
    context: Context,
    validatable : Validatable & Code<number>
) {

    if(validatable.valid) {

        context.response.status = validatable.code;
        context.response.body = validatable.value;

    } else {

        context.response.status = validatable.code;
        context.response.body = validatable.message;
    }
}
