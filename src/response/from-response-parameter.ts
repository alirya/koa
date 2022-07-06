import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import Response from '@alirya/http/response/response.js';
import Context from '../context/context.js';
import FromResponseParameters from './from-response-parameters.js';

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
