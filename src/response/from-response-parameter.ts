import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Response from "@alirya/http/response/response";
import Context from "../middleware/context/context";
import FromResponseParameters from "./from-response-parameters";

export default function FromResponseParameter<Subject extends Value & Validatable & Message<string>>(
    {
        context,
        response
    } : {
        context : Context,
        response : Response,
    }
) {

    FromResponseParameters(context, response);
}
