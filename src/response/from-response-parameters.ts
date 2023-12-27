import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import Response from '@alirya/http/response/response.js';
import Context from '../context/context.js';

export default function FromResponseParameters<Subject extends Value & Validatable & Message<string>>(
    context : Context,
    response : Response,
) {

    context.response.set(response.headers);
    context.response.body = response.body;
    context.response.status = response.code;
    context.response.message = response.message;

}
