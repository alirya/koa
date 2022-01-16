import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Response from "@alirya/http/response/response";
import Context from "../middleware/context/context";

export default function FromResponseParameters<Subject extends Value & Validatable & Message<string>>(
    context : Context,
    response : Response,
) {

    context.response.set(response.headers);
    context.response.body = response.body;
    context.response.status = response.code;
    context.response.message = response.message;

}
