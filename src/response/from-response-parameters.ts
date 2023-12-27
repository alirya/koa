import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import Response from '@axiona/http/response/response.js';
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
